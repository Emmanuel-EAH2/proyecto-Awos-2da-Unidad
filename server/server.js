require('./config/config');
const express =  require('express');
const bodyParser = require('body-parser');
const app = express(); 
const mongoose = require('mongoose');
const cors = require('cors');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()); 

// Habilitar CORS
// app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

app.get('/', function(req, res){ // Aqui indicamos una funcion get, la cual pide 2 parametros, la url y la funcion como tal (el req es solicitar algo del cliente) y (el res, es la respuesta del servidor)
res.send('hellow word');// el send es acepta etiquetado HTML
}); 

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/productos'));
app.use(require('./routes/login'));
app.use(cors());

mongoose.connect('mongodb+srv://Emmanuel:supermegamofing2@cluster0.jvqv6.mongodb.net/cafeteria',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 
  useCreateIndex: true},

  (err, res) =>{
    if(err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () =>{
    console.log('El servidor esta escuchando en el puerto:', process.env.PORT);
});