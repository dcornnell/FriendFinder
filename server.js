//require modules
const express = require("express");
const path = require("path");
// initialise new server
const app = express();
//Port
const PORT = process.env.PORT || 3000;
// middleware 
app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Paths
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});