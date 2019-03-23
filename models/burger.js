'use strict';
module.exports = (sequelize, DataTypes) => {
	const Burger = sequelize.define(
		'Burger',
		{
			name: { type: DataTypes.STRING, allowNull: false },
			isDevoured: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{ paranoid: true },
	);
	return Burger;
};
