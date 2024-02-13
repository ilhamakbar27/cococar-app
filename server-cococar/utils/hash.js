const { hashSync, compareSync } = require("bcryptjs");


const hashing = (password) => hashSync(password)
const comparePassword = (password,userPassword) => compareSync(password,userPassword)




module.exports= {hashing,comparePassword}