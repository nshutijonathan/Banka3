import pool from './connect';

export const createTables=()=>{
	const users=`CREATE TABLE IF NOT EXISTS
	users(
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE NOT NULL,
	firstname VARCHAR(25) NOT NULL, 
	lastname VARCHAR(25) NOT NULL,
	password VARCHAR(25) NOT NULL,
	type VARCHAR(10) NOT NULL,
	isadmin VARCHAR(350) NOT NULL
	)`;
	const queries=`${users}`;
    pool.query(queries);
};
require('make-runnable');
