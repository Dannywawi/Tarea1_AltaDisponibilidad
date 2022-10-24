const { Router} = require('express');
const { Pool, Client } = require('pg');
const router = Router();

const { getReseña, insertReseña, deleteReseña, updateReseña } = require('../controllers/index.controllers');

const client2 = new Client({
  user: 'postgres',
  host: 'tarea1_altadisponibilidad-db-1',
  password: '1234',
  database: 'tarea1',
  port: 5432
});
const d = async() => {
  await client2.connect();
  await client2.query('DROP TABlE IF EXISTS resenas;');
  await client2.query('CREATE TABLE resenas(titulo text, nombre text, resumen text);');
  await client2.end();
}
d();

// INDEX
router.get('/', (req,res)=>{
  res.send("Estas en el backend");
    //res.render('pages/index.ejs');
});

router.post('/resena/get/', getReseña);
router.post('/resena/insert', insertReseña);
router.post('/resena/delete', deleteReseña);
router.post('/resena/update', updateReseña);

module.exports = router;