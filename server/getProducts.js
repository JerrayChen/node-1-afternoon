let products = require('../products.json');

function getProducts(req, res){
    if (req.query.price!=undefined){
        let filteredProducts = products.filter((v)=>v.price>=req.query.price);
        res.status(200).json(filteredProducts);
    }else{
        res.status(200).json(products);
    }
}

module.exports = {
    getProducts
};