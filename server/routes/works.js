const express = require('express');
const router = express.Router();

const date = require("date-and-time");
const Work = require("../models/Work");


router.get("/", (req, res) => {
    Work.find()
        .then(works => {
            res.status(200).json(works)
        })
        .catch(err =>
            res
            .status(400)
            .json({ user: "Error fetching works data" })
        );
});

module.exports = router;