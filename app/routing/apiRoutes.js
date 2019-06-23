const express = require("express");
const router = express.Router();

let friends = require("../data/friends");

router.get("/api/friends", function (req, res) {
    res.json(friends);
});

router.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    const matchingFriend = searchMatches(newFriend);
    console.log(`matching friend ${matchingFriend}`);
    friends.push = {
        fullName: newFriend.fullName, foto: newFriend.foto,
        scores: newFriend.scores
    };
    console.log(friends);
    console.log(matchingFriend);
    res.json(matchingFriend);

});

function searchMatches(newFriend) {
    console.log(newFriend)
    let oldPoints = 0;
    let newPoints = 0;
    let highPoints = 0;
    matchingFriend = {};
    friends.forEach(element => {
        console.log(element.scores);
        newPoints = accumulatePoints(element.scores, newFriend.scores);
        if (oldPoints < newPoints) {
            highPoints = newPoints;
            matchingFriend = element;
        }
        oldPoints = newPoints;
    });
    if (highPoints === 0) {
        matchingFriend.fullName = "no match found, sorry";
        matchingFriend.foto = "none";
    }
    console.log(`highest points ${highPoints} ${matchingFriend.fullName}`);
    return matchingFriend;
}

function accumulatePoints(scoresMatchingFriend, scoresNewFriend) {
    let points = 0;
    for (let i = 0; i < scoresNewFriend.length; i++) {
        console.log(typeof (scoresMatchingFriend[i]) + " and " + typeof (scoresNewFriend[i]));
        if (+scoresMatchingFriend[i] === +scoresNewFriend[i]) {
            points++;
            console.log(points);
        }
    }
    return points;
}

module.exports = router;