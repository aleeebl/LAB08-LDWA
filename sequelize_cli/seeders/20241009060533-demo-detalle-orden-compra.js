'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1, 
        CodMedicamento: 2, 
        descripcion: 'Descripcion del jarabe',
        cantidad: 10,
        precio: 5.2,
        montoUni: 52.50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NroOrdenC: 2, 
        CodMedicamento: 6, 
        descripcion: 'Descripción de la pastilla',
        cantidad: 5,
        precio: 17.25,
        montoUni: 3.45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  },
};
