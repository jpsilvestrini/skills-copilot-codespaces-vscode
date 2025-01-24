// Create web server
// Create a new web server using express
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
// Define a new route that listens for POST requests to /comments
app.post('/comments', (req, res) => {
  // Create a new comment
  const comment = {
    id: 1,
    text: 'Hello, World!',
  };
  // Send the comment object back to the client
  res.json(comment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});