//File: routes/productos.js
module.exports = function(app) {

  var Product = require('../models/product.js');

  findAllProducts = function(req, res) {
  	Product.find(function(err, products) {
  		if(!err) {
        console.log('GET /products')
  			res.send(products);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  findById = function(req, res) {
  	Product.findById(req.params.id, function(err, product) {
  		if(!err) {
        console.log('GET /product/' + req.params.id);
  			res.send(product);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  addProduct = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var product = new Product({
  		name:    req.body.name,
  		description: 	  req.body.description,
  		category:  req.body.category,
  		price:   req.body.price 
  	});

  	product.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(product);
  };

  updateProduct = function(req, res) {
  	Product.findById(req.params.id, function(err, product) {
  		product.name   = req.body.name;
  		product.description    = req.body.description;
  		product.category = req.body.category;
  		product.price  = req.body.price;

  		product.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(product);
  		});
  	});
  }

  deleteProduct = function(req, res) {
  	Product.findById(req.params.id, function(err, product) {
  		product.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/products/list', findAllProducts);
  app.get('/product/:id', findById);
  app.post('/product', addProduct);
  app.put('/product/:id', updateProduct);
  app.delete('/product/:id', deleteProduct);

}