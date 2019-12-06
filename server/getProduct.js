let products = require('../products.json');
function getProduct(req,res){
    let product = products.find(e=>e.id===+req.params.id);

    product?res.status(200).json(product):res.status(500).json('Item not in list')
}

module.exports = {
    getProduct
}