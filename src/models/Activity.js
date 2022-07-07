const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
      // Sequelize crea el id por defecto
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno','Primavera'),
        allowNull: true
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false
    },
    
  });
};