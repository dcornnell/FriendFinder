const path = require('path');
const users = require(path.join(__dirname, "../data/friends.js"));


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(users)
    })

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        const newUser = req.body
        scores = []
        let bestMatch = users[0];
        for (let i = 0; i < users.length; i++) {

            let score = 0;
            for (let j = 0; j < newUser.scores.length; j++) {
                score += (Math.abs(newUser.scores[j] - users[i].scores[j]))
            }
            scores.push((score))
        }
        console.log(scores);
        bestMatch = users[getLowest(scores)];
        res.json(bestMatch);
        console.log(bestMatch)

    })

    function getLowest(arr) {
        let lowest = arr[0] || 25;
        let lowestIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < lowest) {
                lowest = arr[i];
                lowestIndex = i;
            }

        }
        return lowestIndex;
    }
}