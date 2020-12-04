require('./config/config')
const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){ // Aqui indicamos una funcion get, la cual pide 2 parametros, la url y la funcion como tal (el req es solicitar algo del cliente) y (el res, es la respuesta del servidor)
res.send('hellow word');// el send es acepta etiquetado HTML
}); 

app.use(require('./routes/usuario'));
app.use(require('./routes/categoria'));
app.use(require('./routes/productos'));
app.use(require('./routes/login'));

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