const User = require("../models/User");

const { ADMIN, MEMBER, GUEST } = require("../consts/index");
class UserFactory {
  static createUser(type, name, email) {
    switch (type) {
      case ADMIN:
        return new User({ name, email, role: ADMIN });
      case MEMBER:
        return new User({ name, email, role: MEMBER });
      case GUEST:
        return new User({ name, email, role: GUEST });
      default:
        throw new Error("Invalid user type");
    }
  }
}

module.exports = UserFactory;
