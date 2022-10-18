const { Router } = require('express');
const router = Router();

const { getReseña, insertReseña, deleteReseña, updateReseña } = require('../controllers/index.controllers');


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
