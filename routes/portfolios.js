const express = require('express');
const router = express.Router();

const date = require("date-and-time");
const Portfolio = require("../models/Portfolio");


router.get("/", (req, res) => {
    Portfolio.find()
        .then(Porfolios => {
            res.status(200).json(Porfolios)
        })
        .catch(err =>
            res
            .status(400)
            .json({ user: "Error fetching works data" })
        );
});

module.exports = router;