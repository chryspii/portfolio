const express = require('express');
const router = express.Router();
const usercontroller = require('./../controllers/user.ctrl')

router.get('/:id', usercontroller.getUser);
router.get('/profile/:id', usercontroller.getUserProfile);
router.post('/', usercontroller.addUser);
router.post('/follow', usercontroller.followUser);

module.exports = router;