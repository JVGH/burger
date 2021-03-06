'use strict';
module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME,
		host: process.env.MYSQL_HOST,
		port: parseInt(process.env.MYSQL_PORT),
		dialect: 'mysql',
	},
	test: {
		username: 'root',
		password: null,
		database: 'database_test',
		host: '127.0.0.1',
		port: 3306,
		dialect: 'mysql',
	},
	production: {
		use_env_variable: 'JAWSDB_URL',
		dialect: 'mysql',
	},
};
