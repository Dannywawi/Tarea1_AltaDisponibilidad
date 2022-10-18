const { Router} = require('express');
const { Pool, Client } = require('pg');
const router = Router();

const { getReseña, insertReseña, deleteReseña, updateReseña } = require('../controllers/index.controllers');

const client = new Client({
  user: 'postgres',
  host: 'tarea1_altadisponibilidad-db-1',
  password: '1234',
  port: 5432
});

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
    res.render('pages/index.ejs');
});

// CREAR UNA RESEÑA
router.get('/createReview', (req,res)=>{
    res.render('pages/createReview.ejs');
});

// VER UNA RESEÑA
router.get('/review', (req,res)=>{
    res.render('pages/review.ejs');
});

// ELIMINAR UNA RESEÑA
router.get('/deleteReview', (req,res)=>{
    res.render('pages/deleteReview.ejs');
});

// ACTUALIZAR UNA RESEÑA
router.get('/updateReview', (req,res)=>{
    res.render('pages/updateReview.ejs');
});





router.post('/resena/get/', async (req, res) => {
  console.log( req.body)
  let titulo = req.body.titulo

  const SQLrequest = 'SELECT * FROM resenas WHERE titulo = $1;';
  const response = await pool.query(SQLrequest, [titulo]);
  console.log(response)
  res.status(200).json(response.rows);

});
router.post('/resena/insert', insertReseña);
router.post('/resena/delete', deleteReseña);
router.post('/resena/update', updateReseña);



module.exports = router;
