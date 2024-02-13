'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("UserProfiles", [
      {
        gender: "male",
        age: 45,
        profileimg:"https://i.pinimg.com/474x/1d/c2/80/1dc28020027040885d1f1ceff79895af.jpg",
        UserId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gender: "male",
        age: 25,
        profileimg:"https://i.pinimg.com/474x/7b/ed/8e/7bed8eb33ecfc451ab71c4c0afe51208.jpg",
        UserId:2,
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserProfiles', null, {restartIdentity:true, truncate:true, cascade:true});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
