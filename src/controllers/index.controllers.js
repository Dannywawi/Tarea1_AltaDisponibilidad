const {Pool} = require('pg');

// Database
const config = {
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'tarea1',
    port: '5432'
};

const pool = new Pool(config);


//Funciones reseña
const getReseña = async (req, res) => {
    console.log( req.body)
    let titulo = req.body.titulo

    const SQLrequest = 'SELECT * FROM resenas WHERE titulo = $1;';
    const response = await pool.query(SQLrequest, [titulo]);
    console.log(response)
    res.status(200).json(response.rows);

}

const insertReseña = async (req, res) => {
    console.log( req.body)
    

    let titulo = req.body.titulo
    let autor = req.body.autor
    let review1 = req.body.review1;

    const SQLrequest = 'INSERT INTO resenas(titulo, nombre, resumen) VALUES($1, $2, $3);';
    const response = await pool.query(SQLrequest, [titulo, autor, review1]);

    console.log(response);
    res.send('Reseña creada');
}

const deleteReseña = async (req, res) => {
    console.log( req.body)
    
    let titulo = req.body.titulo

    const SQLrequest = 'DELETE FROM resenas WHERE titulo = $1 '
    const response = await pool.query(SQLrequest, [titulo]);

    console.log(response);
    res.send('Reseña eliminada');
}

const updateReseña = async (req, res) => {
    console.log( req.body)
    
    let titulo = req.body.titulo
    let autor = req.body.autor
    let review1 = req.body.review1;


    const SQLrequest = 'UPDATE resenas SET resumen = $3 WHERE titulo = $1 AND nombre = $2'
    const response = await pool.query(SQLrequest, [titulo, autor, review1]);

    console.log(response);
    res.send('Reseña actualizada');
}



module.exports = {
    getReseña,
    insertReseña,
    deleteReseña,
    updateReseña
}