const mysql = require('mysql2');
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql1596',
    database: 'flipkart_replica'
    
});



 // Main page

app.get('/', (req, res) => {
 res.render('products.ejs');
   }); 
   
   

// CART ROUTE(jismy database use hua hai)

app.get('/cart', (req, res) => {
    connection.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        res.render('cart', { data: results });
    });
});


// ADD ROUTE

app.post('/add', (req, res) => {
    const { name, price, description } = req.body;
    const query = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
    connection.query(query, [name, price, description], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        console.log('Data stored');
        res.redirect('/cart');
    });
});

//DELETE ROUTE

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Database error');
        }
        console.log('Product deleted');
        res.redirect('/cart');
    });
});



app.listen("8080", () => {
    console.log("server is listening to port 8080");
});


















