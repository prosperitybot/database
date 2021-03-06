const Sequelize = require('sequelize');

const UserModel = require('./models/user.js');
const GuildModel = require('./models/guild.js');
const GuildUserModel = require('./models/guilduser.js');
const LevelRoleModel = require('./models/levelrole.js');
const IgnoredChannelModel = require('./models/ignoredchannel.js');
const IgnoredRoleModel = require('./models/ignoredrole.js');
const WhitelabelBotModel = require('./models/whitelabelbot.js');
const MessageLogModel = require('./models/messagelog');
const CommandLogModel = require('./models/commandlog');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: 'mariadb',
});

const User = UserModel(sequelize, Sequelize);
const Guild = GuildModel(sequelize, Sequelize);
const GuildUser = GuildUserModel(sequelize, Sequelize);
const LevelRole = LevelRoleModel(sequelize, Sequelize);
const IgnoredChannel = IgnoredChannelModel(sequelize, Sequelize);
const IgnoredRole = IgnoredRoleModel(sequelize, Sequelize);
const WhitelabelBot = WhitelabelBotModel(sequelize, Sequelize);
const MessageLog = MessageLogModel(sequelize, Sequelize);
const CommandLog = CommandLogModel(sequelize, Sequelize);

User.belongsToMany(Guild, { through: GuildUser });
Guild.belongsToMany(User, { through: GuildUser });
User.hasMany(GuildUser);
GuildUser.belongsTo(User);
Guild.hasMany(GuildUser);
GuildUser.belongsTo(Guild);

LevelRole.belongsTo(Guild);
Guild.hasMany(LevelRole);

IgnoredChannel.belongsTo(Guild);
Guild.hasMany(IgnoredChannel);

IgnoredRole.belongsTo(Guild);
Guild.hasMany(IgnoredRole);

WhitelabelBot.belongsTo(User);
User.hasOne(WhitelabelBot);

MessageLog.belongsTo(Guild);
MessageLog.belongsTo(User);
Guild.hasMany(MessageLog);
User.hasMany(MessageLog);

CommandLog.belongsTo(Guild);
CommandLog.belongsTo(User);
Guild.hasMany(CommandLog);
User.hasMany(CommandLog);

module.exports = {
	User,
	Guild,
	GuildUser,
	LevelRole,
	IgnoredChannel,
	IgnoredRole,
	WhitelabelBot,
	MessageLog,
	CommandLog,
	sequelize,
	setup: (logger) => {
		sequelize.options.logging = msg => logger.info(msg);
	},
	migrate: (force = false) => {
		sequelize.sync({ force: force })
			.then(() => {
				console.log('Database & Tables Created');
			});
	},
};