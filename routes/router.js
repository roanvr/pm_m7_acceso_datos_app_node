import express from 'express';
import path from 'path';
const router = express.Router();
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import {} from '../queries/consultas.js';

router.get('/', (req,res) => res.sendFile(path.join(__dirname, '../views/index.html')));

export default router;