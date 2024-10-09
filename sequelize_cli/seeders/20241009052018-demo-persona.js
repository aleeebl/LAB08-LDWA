'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Personas',[
     
     {
        nomCli: 'Alejandra',

        apeCli: 'Blas',

        dirCli: 'Santa Anita',

        dniCli: '12345678',

        createdAt: new Date(),

        updatedAt: new Date(),
     },

    ]);

  },
  down:(queryInterface, Sequelize) =>{
    return queryInterface.bulkDelete('Personas', null,{});
  },
};