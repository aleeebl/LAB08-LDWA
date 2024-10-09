'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompras', [
      {
        fechaEmision: new Date('2024-10-09') , 
        Situacion: 'En proceso', 
        Total: '50.00',
        CodLab: 12,
        NroFacturaProv: 'FAC0309',
        createdAt: new Date(),
        updatedAt: new Date()
       
      },
      {
        fechaEmision: new Date('2024-10-09') , 
        Situacion: 'Entregado', 
        Total: '80.00',
        CodLab: 21,
        NroFacturaProv: 'FAC2022',
        createdAt: new Date(),
        updatedAt: new Date()
       
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompras', null, {});
  },
};
