const { User } = require("../models");
const { verifyToken } = require("../utils/token");

const Authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw { name: "Unauthorized" };
    }

    const access_token = authorization.split(" ")[1];
    // console.log(access_token, "<<<<<<<<<<1");
    const payload = verifyToken(access_token);
    // console.log(payload, "<<<<<<<<<<<<<1.4");
    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });
    // console.log(user, "<<<<<<<<<<2");
    if (!user) {
      throw { name: "Unauthorized" };
    }
    req.loginInfo = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };
    console.log(req.loginInfo, ",,,,,,,,,,3");
    next();
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = Authentication;
