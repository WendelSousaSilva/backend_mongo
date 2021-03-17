const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoute = require('./src/routes/user-route')
const mongoose = require('mongoose')
const userModel = require ('./src/models/user')

mongoose.connect('mongodb://localhost:27017/database_mongo', {
    useNewUrlParser: true,
    userUnifiedTopology: true
})

var HELLO = [
    {'msg': 'Hello Express'}
];

function getHello() {
    return HELLO;
}



app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello())
});

/*Chama a Pagina de usuario */

app.use('/users', userRoute);


app.listen(4000, function(){
    console.log('Hello express Listen on port 4000')
})

//teste commit//