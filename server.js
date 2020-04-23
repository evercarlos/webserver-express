const express = require('express')
const app = express() // declara una variable app

const hbs = require('hbs');
require('./hbs/helpers');

// permitir qu heruku de el puerto// sino existe por default coje el 3000
const port = process.env.PORT || 3000;




app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs'); // espesificando el motor para la vista


app.get('/', (req, res) => {
    // res.send('Hola mundo')
    //res.send(salida);
    res.render('home', {
        nombre: 'ever carlos rojas',
    }); // hbs
});

app.get('/about', (req, res) => {
    res.render('about'); // hbs
});

/*app.get('/data', (req, res) => {

    res.send('Hola mundo')


});*/

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})