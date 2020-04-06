const express = require('express');
const router = express.Router();

const studentcontroller = require('./../controllers/student.ctrl');

router.get('/', studentcontroller.getAll);
router.post('/', studentcontroller.addStudent);
router.get('/id/:id', studentcontroller.getStudent);
router.put('/id/:id', studentcontroller.updateStudent);
router.delete('/id/:id', studentcontroller.deleteStudent);

module.exports = router;