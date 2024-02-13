'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Trips',[{
      from:"Jakarta",
      to:"Bandung",
      price:120000,
      distance:250,
      hour:3,
      status:"new",
      carName:"Kijang Innova",
      carImg: "https://i.pinimg.com/474x/1d/ca/a1/1dcaa112feb096ccb2bade4f2385e8f7.jpg",
      date: new Date(),
      UserId:1,
      createdAt:new Date(),
      updatedAt: new Date(),
    }])
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
    await queryInterface.bulkDelete('Trips', null, {restartIdentity:true, truncate:true, cascade:true});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
