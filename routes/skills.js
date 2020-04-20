const express = require('express');
const router = express.Router();

const date = require("date-and-time");
const Skill = require("../models/Skill");


router.get("/", (req, res) => {
    Skill.find()
        .then(Skills => {
            res.status(200).json(Skills)
        })
        .catch(err =>
            res
            .status(400)
            .json({ user: "Error fetching works data" })
        );
});

module.exports = router;