'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456', //plain text , hash password: asuhdusic8732813
      firstName: 'Huy',
      lastName: 'Manh',
      address: 'QuangTrung',
      phoneNumber: '0774792593',
      gender: 1,
      image: '',
      roleId: 'ROLE',
      positionId: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
