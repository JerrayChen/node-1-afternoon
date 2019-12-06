const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const app = express();
const port = 5566;

app.listen(port, ()=>{console.log('Server is listening port ' + port + '!')});



// console.log(products);

app.get('/api/products', getProducts.getProducts);
app.get('/api/product/:id', getProduct.getProduct)