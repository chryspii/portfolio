const mongoose = require('mongoose');
const db = require('./db_connection.js');

let EducationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    gpa: {
        type: String,
        required: true
    },
    research: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    collection: 'education'
});

EducationSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    
    object._id = _id;
    object.startdate = new Date(object.startdate).getFullYear();
    object.enddate = new Date(object.enddate).getFullYear();

    return object;
})

module.exports = db.resumeDB.model('education', EducationSchema)