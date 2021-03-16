//DEPENDENCIES
const express = require ('express');
// const { connect } = require('node:http2');

// Sets an initial port.
const PORT = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTER
require("./Develop/routes/htmlRoutes")(app);
require("./Develop/routes/apiRoutes")(app);

// Start our server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });

  