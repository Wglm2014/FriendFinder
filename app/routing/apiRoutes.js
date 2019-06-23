const express = require("express");
const router = express.Router();

let friends = require("../data/friends");

router.get("/api/friends", function (req, res) {
    res.json(friends);
});

router.post("/api/friends", function (req, res) {
    constnewFriend = req.body;
    const matchingFriend = searchMatches(newFriend);
    friends.push = {
        fullName: newFriend.fullName, foto: newFriend.foto,
        scores: newFriend.scores
    };
    console.log(req.body);
    res.json(matchingFriend);

});

function searchMatches(newFriend) {
    let oldPoints = 0;
    let newPoints = 0;
    let highPoints = 0;
    matchingFriend = [];
    friends.forEach(element => {
        newPoints = accumulatePoints(element.scores, newFriend.scores);
        if (oldPoints < newPoints) {
            highPoints = newPoints;
            matchingFriend = element;
        }
        oldPoints = newPoints;
    });
    return matchingFriend;
}

function accumulatePoints(scoresMatchingFriend, scoresNewFriend) {
    let points = 0;
    for (let i = 0; i < array.length; i++) {
        if (scoresMatchingFriend[i] === scoresNewFriend[i]) {
            points++
        }
    }
    return points;
}

module.exports = router;