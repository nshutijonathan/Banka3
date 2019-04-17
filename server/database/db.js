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
    pool.query(queries)
    .then((res)=>{
    	console.log(res);
    	pool.end();
    })
    .catch((err)=>{
    	console.log(err);
    	pool.end();
    });
};
export const dropTables=()=>{
	const users='DROP TABLE IF EXISTS users';
	pool.query(users)
	.then((res)=>{
		console.log(res);
		pool.end();
	})
	.catch((err)=>{
		console.log(err);
		pool.end();
	});
	pool.on('remove',()=>{
		console.log('client removed');
		process.exit(0);

	});
};
require('make-runnable');
