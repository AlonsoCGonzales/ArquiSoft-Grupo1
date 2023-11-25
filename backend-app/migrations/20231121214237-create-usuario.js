'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.UUIDV4
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      tipo_documento: {
        type: DataTypes.ENUM('dni', 'pasaporte', 'c_extranjeria'),
      },
      n_documento: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      tipo_usuario: {
        type: DataTypes.ENUM('admin', 'profesional', 'usuario'),
      },
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
    await queryInterface.dropTable('usuarios');
  }
};