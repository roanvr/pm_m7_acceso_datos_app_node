import express from 'express';
import path from 'path';
const router = express.Router();
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import { addUser, getUser, updateUser, deleteUser, addTransfer, getTransfer } from '../queries/consultas.js';

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

router.put('/usuario', async(req,res)=> {
    try {
        const { id } = req.query;
        const {name, balance} = req.body;
        const resultado = await updateUser(name, balance, id);
        res.status(201).send(resultado)
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/usuario', async(req,res) => {
    try {
        const { id } = req.query;
        const resultado = await deleteUser(id);
        res.status(201).send(resultado);
    } catch (error) {
        res.status(500).send(error);  
    }
});

router.get('/transferencias', async(req,res) => {
    try {
        const resultado = await getTransfer();
        res.status(201).json(resultado);
    } catch (error) {
        res.status(500).send(error);  
    }
});

router.post('/transferencias', async(req,res) => {
    try {
        const {nombre, balance} = req.body;
        const data = [nombre, balance];
        const resultado = await addTransfer(data);//consulta
        res.status(201).send(resultado.rows);
    } catch (error) {
        res.status(500).send(error);  
    }
});


export default router;