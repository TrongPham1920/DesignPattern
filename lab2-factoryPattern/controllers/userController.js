const User = require("../models/User");
const UserFactory = require("../factories/userFactory");
const statusCode = require("../consts/httpStatusCode");

// Create new user
const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = UserFactory.createUser(role, name, email);
    await user.save();
    return res.status(statusCode.OK).json({
      data: user,
      message: "User created successfully",
    });
  } catch (err) {
    return res.status(statusCode.BAD_REQUEST).json({ error: err.message });
  }
};

// Get all users list
const getUsers = async (req, res) => {
  try {
    const params = req.query;
    const defaultParams = setDefaultParams(params);
    const {
      page,
      limit,
      orderBy,
      sortBy,
      role,
      keyword,
      selected = "name, email",
    } = defaultParams;

    const skip = (page - 1) * limit;
    const query = {};
    if (role) query.role = role;
    if (keyword) {
      query.$or = [
        { name: { $regex: keyword, $options: "i" } },
        { email: { $regex: keyword, $options: "i" } },
      ];
    }

    const countDocument = await User.countDocuments(query);
    const selectedFields = processSelected(selected);
    const users = await User.find(query, selectedFields)
      .sort({ [orderBy]: sortBy })
      .skip(skip)
      .limit(limit);

    return res.status(statusCode.OK).json({
      data: users,
      paging: {
        total: countDocument,
        page: Number(page),
        limit: Number(limit),
      },
      message: "Get users successfully",
    });
  } catch (err) {
    return res.status(statusCode.SERVER_ERROR).json({ error: err.message });
  }
};

const setDefaultParams = (params) => {
  const { page, limit, orderBy, sortBy } = params;
  if (!page || page < 1) params.page = 1;
  if (!limit || limit < 1) params.limit = 10;
  if (!orderBy) params.orderBy = "createdAt";
  if (!sortBy) params.sortBy = -1; // -1: desc, 1: asc
  return params;
};

const processSelected = (selected = "name, email") => {
  const fields = selected.split(",").map((field) => field.trim());
  const selectedFields = {
    _id: 1,
  };
  fields.forEach((field) => {
    selectedFields[field] = 1;
  });
  return selectedFields;
};

module.exports = {
  createUser,
  getUsers,
};
