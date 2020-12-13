// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./Router/apiRouters")(app);
require("./Router/htmlRouters")(app);

// Starts our server
app.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });