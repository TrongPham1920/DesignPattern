const mongoose = require("mongoose");

const {
  ADMIN,
  MEMBER,
  GUEST,
  USER_COLLECTION_NAME,
  USER_DOCUMENT_NAME,
} = require("../consts/index");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: [ADMIN, MEMBER, GUEST], required: true },
  },
  {
    timestamps: true,
    collection: USER_COLLECTION_NAME,
  }
);

module.exports = mongoose.model(USER_DOCUMENT_NAME, UserSchema);
