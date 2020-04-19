const express = require('express');
const router = express.Router();

const date = require("date-and-time");
const About = require("../models/About");


router.get("/", (req, res) => {
    About.find()
        .then(Abouts => {
            res.status(200).json(Abouts)
        })
        .catch(err =>
            res
            .status(400)
            .json({ user: "Error fetching works data" })
        );
});

module.exports = router;