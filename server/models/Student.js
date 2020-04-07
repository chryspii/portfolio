const mongoose = require('mongoose');
const db = require('./db_connection.js');

let StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    rollno: Number
},
{
    timestamps: true,
    collection: 'students'
});

StudentSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;

    return object;
})

// connect to specific collection
module.exports = db.resumeDB.model('students', StudentSchema)