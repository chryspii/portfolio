const Student = require('./../models/Student');
const mongoose = require('mongoose');

module.exports = {
    addStudent: (req, res, next) => {
        let { name, email, rollno } = req.body;
        saveStudent({ name, email, rollno});

        function saveStudent(obj) {
            new Student(obj).save((err, student) => {
                if(err)
                    res.send(err)
                else if(!student)
                    res.sendStatus(404)
                else {
                    res.send(student)
                }
                next();
            })
        }
    },
    getAll: (req, res, next) => {
        Student.find((err, students) => {
            if(err)
                res.send(err)
            else if(!students)
                res.sendStatus(404)
            else
                res.send(students)
            next()
        })
    },
    getStudent: (req, res, next) => {
        Student.findById(req.params.id, (err, student) => {
            if(err)
                res.send(err)
            else if(!student)
                res.sendStatus(404)
            else
                res.send(student)
            next()
        })
    },
    updateStudent: (req, res, next) => {
        let { name, email, rollno} = req.body;
        saveStudent({ name, email, rollno });

        function saveStudent(obj) {
            Student.findByIdAndUpdate(req.params.id, { $set: obj }, { useFindAndModify: false }, (err, student) => {
                if(err)
                    res.send(err)
                else if(!student)
                    res.sendStatus(404)
                else
                    res.send(student)
                next()
            })
        }
    },
    deleteStudent: (req, res, next) => {
        Student.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, student) => {
            if(err)
                res.send(err)
            else if(!student)
                res.sendStatus(404)
            else
                res.send(student)
            next()
        })
    }
}
