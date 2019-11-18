const path = require('path');
const users = require(path.join(__dirname, "../data/friends.js"));


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(users)
    })

    app.post("/api/friends", function(req, res) {
        users.push(req.body)

        res.end()
    })
}