const { connectToDb, getDb } = require('./db.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.post('/', async (req, res) => {
    const { title, description, price, category, image } = req.body;
    const product = { title, description, price, category, image };
    try {
        const result = await db.collection('Products').insertOne(product);
        console.log(result);
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product', message: error.message });
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await db.collection('Products').find().toArray();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});
connectToDb((error) => {
    if (!error) {
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log(`the PORT ${PORT} is listening`);
        });
        db = getDb();
    }
});