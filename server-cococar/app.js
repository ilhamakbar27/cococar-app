const express = require("express");
// const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const app = express();
const router = require("./routers");
const errorHandler = require("./middlewares/errorHandler");
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errorHandler);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
