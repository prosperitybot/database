module.exports = (sequelize, type) => {
	return sequelize.define('message_logs', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
	});
};