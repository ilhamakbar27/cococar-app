const { User, Trip, UserProfile } = require("../models");
const { comparePassword } = require("../utils/hash");
const { createToken } = require("../utils/token");
const { OAuth2Client } = require("google-auth-library");

// comparePassword
class FrontController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw "email error";
      }
      if (!password) {
        throw "password error";
      }
      const foundUser = await User.findOne({
        where: { email },
      });
      console.log(foundUser);
      if (!foundUser) {
        throw "Invalid credentials";
      }
      if (!email || !password) {
        throw { name: "SequelizeValidationError" };
      }

      const correctUser = comparePassword(password, foundUser.password);
      if (!correctUser) {
        throw "Invalid credentials";
      }
      const payload = {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
      };
      //   console.log(payload);
      const access_token = createToken(payload);
      console.log(access_token);

      res.status(200).json({
        message: `successfully login ${foundUser.username}`,
        role: `${foundUser.role}`,
        access_token: `${access_token}`,
      });
    } catch (error) {
      next(error);
    }
  }
  static async signup(req, res, next) {
    try {
      const { email, password, username } = req.body;
      const newUser = await User.create({
        email,
        password,
        username,
      });
      res.status(201).json({ message: "Success register", newUser });
    } catch (error) {
      next(error);
    }
  }
  static async addTrip(req, res, next) {
    try {
      const { userId } = req.loginInfo;
      console.log(userId);
      const {
        from,
        to,
        price,
        distance,
        hour,
        status,
        carName,
        carImg,
        date,
        // UserId,
      } = req.body;
      const newTrip = await Trip.create({
        from,
        to,
        price,
        distance,
        hour,
        status,
        carName,
        carImg,
        date,
        UserId:+userId
      });
      res.status(201).json({ message: "succes add new trip", newTrip });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async showTrips(req, res, next) {
    try {
      const data = await Trip.findAll({
        include: {
          model: User,
          include: {
            model: UserProfile,
          },
        },
      });
      console.log(data);
      res.status(200).json({ message: "suceess show data", data });
    } catch (error) {
      next(error);
    }
  }
  static async showUsers(req, res, next) {
    try {
      const data = await User.findAll({
        include: {
          model: Trip,
        },
        where: {
          role: "Driver",
        },
      });
      console.log(data);
      res.status(200).json({ message: "suceess show data", data });
    } catch (error) {
      next(error);
    }
  }
  static async showTripsById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Trip.findByPk(id, {
        include: [
          {
            model: User,
            include: UserProfile,
          },
        ],
      });
      console.log(data);
      res.status(200).json({ message: "suceess show data", data });
    } catch (error) {
      next(error);
    }
  }
  static async googleLogin(req, res, next) {
    try {
      const { token } = req.headers;
      const client = new OAuth2Client();

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: {
          username: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "password_google",
          username: payload.email,
        },
        hooks: false,
      });

      const access_token = createToken({
        id: user.id,
        role: user.role,
        email: user.email,
        username: user.username,
      });

      res.status(200).json({ access_token });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = FrontController;
