const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Auction Platform Backend is Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.post('/api/auction', (req, res) => {
    const { title, startingPrice } = req.body;
    res.json({ message: `Auction "${title}" created with starting price $${startingPrice}` });
});
import axios from 'axios';
useEffect(() => {
    axios.get('http://localhost:5000/api/auction')
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}, []);
const mongoose = require('mongoose');

const AuctionSchema = new mongoose.Schema({
    title: String,
    description: String,
    startingPrice: Number,
    highestBid: { type: Number, default: 0 },
    bids: [{ user: String, amount: Number, timestamp: Date }],
    endTime: Date
});

module.exports = mongoose.model('Auction', AuctionSchema);
