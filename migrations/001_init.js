// const { sequelize } = require('../database');
const Sequelize = require('sequelize');

// const guilds = require('../models/guild')(sequelize, Sequelize);

async function up({ context: queryInterface }) {
	// await queryInterface.createTable(guilds);
	await queryInterface.createTable('guilds', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
			allowNull: false,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		premium: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		notificationType: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: 'reply',
		},
	});
	await queryInterface.createTable('users', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		discriminator: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});
	await queryInterface.createTable('guild_users', {
		guildId: {
			type: Sequelize.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		userId: {
			type: Sequelize.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		level: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		xp: {
			type: Sequelize.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	});
	await queryInterface.createTable('level_roles', {
		guildId: {
			type: Sequelize.BIGINT,
			allowNull: false,
		},
		id: {
			type: Sequelize.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		level: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	});
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('guilds');
	await queryInterface.dropTable('users');
	await queryInterface.dropTable('guild_users');
	await queryInterface.dropTable('level_roles');
}

module.exports = { up, down };