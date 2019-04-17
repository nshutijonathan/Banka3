import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const pool=new pg.pool({
	connectionString:process.env.DATABASE_URL,

});
pool.on('connect',()=>{
	console.log('connected to the database');
});
export default pool;
