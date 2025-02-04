const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

mongoose.connect('mongodb+srv://vik:xFG2IPkrhNLn2lUQ@backenddb.ew28n.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
.then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
        console.log("server is running at port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
})