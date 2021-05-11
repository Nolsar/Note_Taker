//DEPENDENCIES
const express = require ('express');


// Sets an initial port.
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//ROUTER
require('./routes/routes')(app);

// Start our server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
})


  