const express = require('express');
const app = express();
const PORT = 9000;

// Middleware to parse JSON bodies
app.use(express.json());


app.get('/', (req,res)=>{
    res.send("Welcome to Node Route Test")
})
// POST route to receive and log data
app.post('/notifyme', (req, res) => {
    console.log('Received POST request:', req.body); // Log the request body
    res.status(200).json(req.body); // Send the received JSON data as response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
