const errorHandler = async (error, req, res, next) => {
    console.log(error);
    let status = 500;
    let message = "Internal Server Error";
  
    if (error === "Invalid credentials") {
      status = 401;
      message = "Invalid Username or Password";
    }
  
    if (error.name === "Unauthorized") {
      status = 401;
      message = "Please login first!";
    }
  
    if (error.name === "TokenExpiredError") {
      status = 401;
      message = "Please login again!";
    }
    if (error.name === "JsonWebTokenError") {
      status = 401;
      message = "Please login first!";
    }
  
    if (error.name === "SequelizeDatabaseError") {
      status = 400;
      message = "Invalid input";
    }
  
    if (error.name === "img empty") {
      status = 400;
      message = "file required";
    }
    if (error.name === "SequelizeForeignKeyConstraintError") {
      status = 400;
      message = "Invalid input";
    }
    if (error === 'email error') {
      status = 400;
      message = "email required";
    }
    if (error === 'password error') {
      status = 400;
      message = "password required";
    }
  
    if (error.name === "SequelizeUniqueConstraintError") {
      status = 400;
      message = error.errors[0].message;
    }
    if (error.name === "SequelizeValidationError") {
      status = 400;
      message = error.errors[0].message;
    }
  
    //   if (error.name === "Sequelize") {
    //   }
  
    if (error.name === "Forbidden") {
      status = 403;
      message = `Sorry  You have no access`;
    }
  
    if (error.name === "Not found") {
      status = 404;
      message = `Data not found`;
    }
  
    res.status(status).json({ message });
  };
  
  module.exports = errorHandler;
  