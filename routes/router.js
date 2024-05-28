import express from 'express';
import path from 'path';
const router = express.Router();
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import { addUser, getUser } from '../queries/consultas.js';

router.get('/', (req,res) => res.sendFile(path.join(__dirname, '../views/index.html')));

router.post('/usuario', async (req,res) => {
    try{
        const {nombre, balance} = req.body;
        const data = [nombre, balance];
        const resultado = await addUser(data);//consulta
        res.status(201).send(resultado.rows);
    }catch(error){
        res.status(500).send(error);
    };
});

router.get('/usuarios', async(req,res) => {
    try {
        const resultado = await getUser();
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;