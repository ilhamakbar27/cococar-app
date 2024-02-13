"use strict";

const { hashing } = require("../utils/hash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "atma jaya",
        email: "driver1@mail.com",
        password: hashing("12345"),
        role: "Driver",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "sudimara",
        email: "driver2@mail.com",
        password: hashing("12345"),
        role: "Driver",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {restartIdentity:true, truncate:true, cascade:true});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
