const mongoose = require('mongoose');
const db = require('./db_connection.js');

let SkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    } 
});

let SubtitleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: [SkillSchema]
});

let TitleSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    data: [SubtitleSchema]
},
{
    timestamps: true,
    collection: 'skill'
});

TitleSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    
    object._id = _id;

    return object;
})

module.exports = db.resumeDB.model('skill', TitleSchema)