const express = require('express');
const app = express();
const PORT = 9000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to receive and log data
app.post('/notifyme', (req, res) => {
    console.log('Received POST request:', req.body); // Log the request body
    res.status(200).send('POST request received and logged.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
