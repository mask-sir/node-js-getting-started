const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5001;
const app = express();

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', (req, res) => {
  res.render('pages/index');
});

// Start the server
app.listen(PORT, () => {
  console.log();
});
