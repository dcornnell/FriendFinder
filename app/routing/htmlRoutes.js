const path = require('path');
//view routes
module.exports = function(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    // any none specified route heads home
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}