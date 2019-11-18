//require modules
const express = require("express");
const path = require("path");
// initialise new server
const app = express();
//Port
const PORT = 3000;
app.use(express.json());
//Paths
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// middleware 


//start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});