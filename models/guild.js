module.exports = (sequelize, type) => {
	return sequelize.define('guilds', {
		id: {
			type: type.BIGINT,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: type.STRING,
			allowNull: false,
		},
		notificationType: {
			type: type.STRING,
			allowNull: false,
			defaultValue: 'reply',
		},
		notificationChannel: {
			type: type.BIGINT,
			allowNull: true,
		},
		xpRate: {
			type: type.DECIMAL,
			allowNull: false,
			defaultValue: 1.0,
		},
		roleAssignType: {
			type: type.STRING,
			allowNull: false,
			defaultValue: 'single',
		},
		active: {
			type: type.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		}
	});
};