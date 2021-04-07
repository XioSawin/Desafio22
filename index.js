const mongoose = require('mongoose');
const express = require('express');
const app = express();
const faker = require('faker');


const productoModel = require('./models/productos');
//const mensajeModel = require('./models/mensajes');

app.use(express.json());




/* ----------------------- ROUTES MESSAGES ----------------------- */
/*
    //CREATE MESSAGE
app.post('/mensajes', (req, res) => {
    const mensaje = req.body;

    const messageSaved = new mensajeModel(mensaje);
    messageSaved.save()
        .then( () => res.sendStatus(201) )
        .catch( (err) => res.send(err))
})

    //READ MESSAGES
app.get('/mensajes', (req, res) => {
    mensajeModel.find( {} )
        .then((mensajes) => res.send(mensajes))
        .catch((err) => res.send(err))
})


/* ----------------------- ROUTES PRODUCTS ----------------------- */

/*
    //CREATE PRODUCT
app.post('/productos', (req, res) => {
    const producto = req.body;

    const productSaved = new productoModel(producto);
    productSaved.save()
        .then( () => res.sendStatus(201) )
        .catch( (err) => res.send(err))
})

    //READ ALL PRODUCTS
app.get('/productos', (req, res) => {

    // FILTER PRODUCTS BY PRICE RANGE
    // /productos?price=true&pgt=10&plt=100
    const { price } = req.query;
    const { pgt } = req.query;
    const { plt } = req.query;

    if(price) {
        productoModel.find( {
            precio: {$gte: pgt, $lte: plt}
        } )
        .then((productos) => res.send(productos))
        .catch((err) => res.send(err))
    }

    // FILTER PRODUCTS BY STOCK RANGE
    // /productos?stock=true&sgt=10&slt=100
    const { stock } = req.query;
    const { sgt } = req.query;
    const { slt } = req.query;

    if(stock) {
        productoModel.find( {
            stock: {$gte: sgt, $lte: slt}
        } )
        .then((productos) => res.send(productos))
        .catch((err) => res.send(err))
    }

    productoModel.find( {} )
        .then((productos) => res.send(productos))
        .catch((err) => res.send(err))
})

    // UPDATE BY PRODUCT CODE
app.put('/productos/:codigo', (req, res) => {
    const { codigo } = req.params;
    const { precio } = req.body;

    productoModel.updateOne({codigo: codigo}, {
        $set: {precio: precio}
    })
        .then((updatedProduct) => res.send(updatedProduct))
        .catch((err) => res.send(err))
})

    //READ BY PRODUCT NAME
app.get('/productos/:nombre', (req, res) => {
    const { nombre } = req.params;

    productoModel.findOne( {nombre: nombre} )
        .then((producto) => res.send(producto))
        .catch((err) => res.send(err))
})

*/


/* ----------------------- FAKER ----------------------- */

const productos = [ ];

    //DESAFIO 22 - VISTA-TEST C/ QUERY PARAMS
    //productos/vista-test?cant=5
app.get('/productos/vista-test', (req, res) => {
    const { cant } = req.query;

    if(!cant) {
        for (let i = 0; i < 10; i++){
            const producto = {
                nombre: faker.commerce.productName(),
                precio: faker.commerce.price(),
                foto: faker.image.imageUrl()
            }
            productos.push(producto);
        }

        res.send(productos);
    }

    if(cant == 0){
        const noProd = "No hay productos";
        res.send(noProd);
    }

    for(let i = 0; i < cant; i++){
        const producto = {
            nombre: faker.commerce.productName(),
            precio: faker.commerce.price(),
            foto: faker.image.imageUrl()
        }
        productos.push(producto);  
        console.log(producto);
    }

    res.send(productos);
})

/* ----------------------- FAKER ----------------------- */

    //DELETE BY PRODUCT CODE
app.delete('/productos/:codigo', (req, res) => {
    const { codigo } = req.params;

    productoModel.deleteOne( {codigo: codigo} )
        .then(() => res.sendStatus(200))
        .catch((err) => res.send(err))
})

app.listen(8080, ()=>{
    console.log('DB driving driving on port 8080');
})


/* ----------------------- SERVER + DB CONNECTION ----------------------- */

/*
app.listen(3040, () => {
    mongoose.connect('mongodb://localhost:27017/ecommerce', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )
        .then( () => console.log('Base de datos conectada') )
        .catch( (err) => console.log(error) ); 
})
*/