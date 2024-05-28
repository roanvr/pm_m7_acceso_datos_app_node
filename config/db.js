import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg;
dotenv.config();


const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_DATABASE,
    AllowExitOnIdle: true,
};

const pool = new Pool(config);

/* const getData = async() => {
    const response = await pool.query('select now()');
    console.log(response.rows);
};

getData(); */

export default pool