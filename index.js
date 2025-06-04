const express = require('express');
const { isPrime } = require('./primeChecker');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Prime Number api Endpoint
app.post('/api/prime', (req, res) => {
    const { number } = req.body;

    
    if (number === undefined || typeof number !== 'number') {
        return res.status(400).json({
            success: false,
            message: 'Invalid input. Please provide a number.',
        });
    }

    const result = isPrime(number);
    return res.status(200).json({
        success: true,
        number,
        isPrime: result,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
