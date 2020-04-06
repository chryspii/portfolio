const mongoose = require('mongoose');
const db = require('./db_connection.js');

let StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    rollno: Number
}, {
    collection: 'students'
})

// connect to specific collection
module.exports = db.resumeDB.model('students', StudentSchema)