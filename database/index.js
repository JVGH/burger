'use strict';

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });

const mysql = require('mysql2/promise');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

mysql
	.createConnection({
		host: process.env.DB_HOST || config.host,
		port: process.env.DB_PORT || config.port,
		user: process.env.DB_USER || config.username,
		password: process.env.DB_PASSWORD || config.password,
	})
	.then((connection) => {
		connection
			.query(
				`CREATE DATABASE IF NOT EXISTS ${
					config.database
				} DEFAULT CHARACTER SET utf8;`,
			)
			.then((res) => {
				console.info('Database successfully created or checked');
				process.exit(0);
			})
			.catch((err) => {
				console.error(
					`Database was NOT successfully created or checked: ${err}`,
				);
				process.exit(1);
			});
	});
