const express = require('express');
const router = express.Router();

const date = require("date-and-time");
const Education = require("../models/Education");


router.get("/", (req, res) => {
    Education.find()
        .then(educations => {
            educations.forEach(element => {
                let gpa = element.gpa.split(", ");
                gpa = gpa[0] + " out of " + gpa[1];

                element.gpa = gpa;
            })
            res.status(200).json(educations)
        })
        .catch(err =>
            res
            .status(400)
            .json({ user: "Error fetching educations data" })
        );
});

module.exports = router;