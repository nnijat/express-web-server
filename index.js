
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const state = require('./state')
const users = require('./state').users;
const products = require('./state').products;

app.use(bodyParser.json());

/***** GET *****/
// Run Get and return all users info as JSON
// http://192.168.149.13:5555/users
app.get('/users', (req, res) => {
    res.json(users)
})

// Run GET and return all product info as JSON
// http://192.168.149.13:5555/products
app.get('/products', (req, res) => {
    res.json(products)
})


/***** GET *****/
// Run GET and return target user index info
// http://192.168.149.13:5555/users/targetUserIndex
app.get('/users/:userId', (req, res) => {
    let id = req.params.userId;
    res.json(users[id - 1]);
})

// Run GET and return target product index info
// http://192.168.149.13:5555/users/targetProductIndex
app.get('/products/:productId', (req, res) => {
    let id = req.params.productId;
    res.json(products[id - 1]);
})


/***** POST *****/
// Run POST and update users data
// http://192.168.149.13:5555/users
app.post('/users', (req, res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

// Run POST and update products data
// http://192.168.149.13:5555/products
app.post('/products', (req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});


/***** PUT *****/
// Run PUT and update user data: name
// http://192.168.149.13:5555/users/targetUserIndex
app.put('/users/:userId', (req, res) => {
    let id = req.params.userId;
    let targetUser = users[id - 1];
    targetUser.name = req.body.name;
    res.json(targetUser);
});

// Run PUT and update product data: name
// http://192.168.149.13:5555/products/targetProductIndex
app.put('/products/:productId', (req, res) => {
    let id = req.params.productId;
    let targetProducts = users[id - 1];
    targetProducts.name = req.body.name;
    res.json(targetProducts);
});


/***** DELETE *****/
// Run DELETE and delete target user by ID
// http://192.168.149.13:5555/users/targetUserIndex
app.delete('/users/:userId', (req, res) => {
    let id = req.params.userId;
    users.splice(id - 1, 1);
    res.send('Target user deleted');
});

// Run DELETE and delete target product by ID
// http://192.168.149.13:5555/products/targetProductIndex
app.delete('/products/:productsId', (req, res) => {
    let id = req.params.productsId;
    products.splice(id - 1, 1);
    res.send('Target product deleted');
});

app.listen(5555)