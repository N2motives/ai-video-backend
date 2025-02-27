// Import Express
const express = require('express');
const app = express();

// Use PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
