const { User, Trip } = require("../models");

const Authorization = async (req, res, next) => {
  try {
    const { userId, role } = req.loginInfo;
    // const {id} =req.params
    if (role === "Driver") {
      const Driver = await User.findOne({
        where: {
          id: userId,
        },
      });
      if (!Driver) {
        throw { name: "Forbidden", email: Driver.email };
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

const isDriverAuthorization = (req, res, next) => {
  try {
    const { email, role } = req.loginInfo;
    if (role !== "Driver") {
      throw { name: "Forbidden", email };
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { Authorization, isDriverAuthorization };
