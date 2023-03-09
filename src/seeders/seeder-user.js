'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'thanhminh@gmail.com',
                password: '123456',
                firstName: 'Nguyen',
                lastName: 'Minh',
                address: 'Thu Duc City',
                gender: 1,
                typeRole: 'Role',
                keyRole: 'R1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
