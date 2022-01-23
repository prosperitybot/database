module.exports = (sequelize, type) => {
	return sequelize.define('message_logs', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
	});
};