const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

// INDEX
app.get('/', (req,res)=>{
  res.render('pages/index.ejs');
});

// CREAR UNA RESEÑA
app.get('/createReview', (req,res)=>{
  res.render('pages/createReview.ejs');
});

// VER UNA RESEÑA
app.get('/review', (req,res)=>{
  res.render('pages/review.ejs');
});

// ELIMINAR UNA RECETA
app.get('/deleteReview', (req,res)=>{
  res.render('pages/deleteReview.ejs');
});

// ACTUALIZAR UNA RECETA
app.get('/updateReview', (req,res)=>{
  res.render('pages/updateReview.ejs');
});

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
