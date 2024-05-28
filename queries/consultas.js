import pool from '../config/db.js';

const addUser = async (data) => {
    try {
        const consulta = {
            text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *',
            values: data
        }
        const response = await pool.query(consulta);
        console.log(response.rows);//Muestra en la terminal los datos agregados en un objeto dentro de un array
        return response.rows;
    } catch (error) {
        console.log(error.message);
    }
};

const getUser = async () => {
    try{
        const consulta = {
            text: 'SELECT * FROM usuarios'
        }
        const response = await pool.query(consulta);
        console.log(response.rows);
        return response.rows
    } catch(error) {
        console.log(error.message);
    }
};



export { addUser, getUser };