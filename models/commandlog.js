module.exports = (sequelize, type) => {
	return sequelize.define('command_logs', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        command: {
            type: type.STRING,
            allowNull: false,
        }
	});
};