const path = require('path');
const users = require(path.join(__dirname, "../data/friends.js"));


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(users)
    })

    app.post("/api/friends", function(req, res) {

        const newUser = req.body
        const match = findMatch(newUser)
        users.push(newUser);

        res.json(match);


    })

    function findMatch(obj) {
        scores = []
        let bestMatch = users[0];
        for (let i = 0; i < users.length; i++) {

            let score = 0;
            for (let j = 0; j < obj.scores.length; j++) {
                score += (Math.abs(obj.scores[j] - users[i].scores[j]))
            }
            scores.push((score))
        }

        bestMatch = users[getLowest(scores)];
        return bestMatch;
    }

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