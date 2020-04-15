const mongoose = require('mongoose');
const db = require('./db_connection.js');

let SkillSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    }, 
    company: {
        type: String,
        required: true
    },
    location: {
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
    text: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    collection: 'skill'
});

SkillSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    
    object._id = _id;
    object.startdate = new Date(object.startdate).getFullYear();
    object.enddate = new Date(object.enddate).getFullYear();

    return object;
})

module.exports = db.resumeDB.model('skill', SkillSchema)