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

const updateUser = async(nombre, balance, id) => {
    try {
        const consulta = {
            text: 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *',
            values: [nombre, balance, id]
        }
        const response = await pool.query(consulta);
        console.log(response.rows);
        return response.rows;
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUser = async(id) => {
    try {
        const consulta = {
            text: 'DELETE FROM usuarios WHERE id = $1 RETURNING *',
            values: [id]
        }
        const response = await pool.query(consulta);
        console.log(response.rows);
        return response.rows;
    } catch (error) {
        console.log(error.message);
    }
};

const addTransfer = async(data) => {
    try {
        const consulta = {
            text:'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1,$2,$3,$4) RETURNING *',
            values: data
        }
        const response = await pool.query(consulta);
        console.log(response.rows);
        return response.rows;
        } catch(error) {
        console.log(error.message); 
    }
};

const getTransfer = async() => {
    try {
        const consulta = {
            text: 'SELECT * FROM transferencias'
        }
        const response = await pool.query(consulta);
        console.log(response.rows);
        return response.rows
        } catch(error) {
        console.log(error.message); 
    }
};


export { addUser, getUser, updateUser, deleteUser, addTransfer, getTransfer };