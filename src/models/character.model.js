import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
const Character = sequelize.define('character', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});
export default Character;
