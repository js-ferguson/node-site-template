const Product = require('../models/product')

exports.getAddProducts = (_, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    })
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

exports.getProducts = (_, res) => {
    const products = Product.fetchAll()
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,

    })}