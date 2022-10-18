const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');




const app = express();
const port = 3000;
app.use(bodyParser.json());

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// Routes
app.use(require('./routes/routes'));

app.listen(port, () => {
    console.log('Server on port 3000');
});


