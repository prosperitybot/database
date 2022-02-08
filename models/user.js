module.exports = (sequelize, type) => {
	return sequelize.define('users', {
		id: {
			type: type.BIGINT,
			primaryKey: true,
		},
		username: {
			type: type.STRING,
			allowNull: false,
		},
		access_levels: {
			type: type.STRING,
			allowNull: false,
			defaultValue: 'null',
			get() {
				return this.getDataValue('access_levels').split(',')
			},
			set(val) {
				this.setDataValue('access_levels', val.join(','))
			}
		},
		discriminator: {
			type: type.STRING,
			allowNull: false,
		},
	});
};