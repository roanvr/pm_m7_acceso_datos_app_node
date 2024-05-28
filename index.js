import express from 'express';
import dotenv from 'dotenv';
import router from './routes/router.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => console.log(`Servidor alojado en http://localhost:${PORT}`));
