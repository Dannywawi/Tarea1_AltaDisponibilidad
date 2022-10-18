const { Router} = require('express');
const { Pool, Client } = require('pg');
const router = Router();

const { getReseña, insertReseña, deleteReseña, updateReseña } = require('../controllers/index.controllers');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: '1234',
  port: 5432
})

const c = async() => {
  await client.connect()
  await client.query('DROP DATABASE IF EXISTS tarea1;');
  await client.query('CREATE DATABASE tarea1');
  await client.end();
}

const d = async() => {
  const client2 = new Client({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'tarea1',
    port: 5432
  });
  await client2.connect();
  await client2.query('DROP TABlE IF EXISTS resenas;');
  await client2.query('CREATE TABLE resenas (titulo text, nombre text, resumen text);');
  await client2.end();

}
c();
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





router.post('/resena/get/', getReseña);
router.post('/resena/insert', insertReseña);
router.post('/resena/delete', deleteReseña);
router.post('/resena/update', updateReseña);



module.exports = router;
