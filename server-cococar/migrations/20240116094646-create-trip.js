'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from: {
        allowNull: false,
        type: Sequelize.STRING
      },
      to: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      distance: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hour: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      carName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      carImg: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:"Users",
          key:"id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      // OrderId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model:"Orders",
      //     key:"id"
      //   },
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trips');
  }
};