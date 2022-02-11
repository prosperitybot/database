module.exports = (sequelize, type) => {
	return sequelize.define('whitelabel_bots', {
		botId: {
			type: type.BIGINT,
			primaryKey: true,
			allowNull: false,
		},
		oldBotId: {
			type: type.BIGINT,
			allowNull: true,
		},
		token: {
			type: type.STRING,
			allowNull: false,
		},
		last_action: {
			type: type.STRING,
			allowNull: true,
			defaultValue: 'start',
		},
		action: {
			type: type.STRING,
			allowNull: true,
			defaultValue: 'start',
		},
	});
};