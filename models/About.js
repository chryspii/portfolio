const mongoose = require('mongoose');
const db = require('./db_connection.js');

let AboutSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['button', 'skill', 'typewritter', 'description'],
        required: true
    },
    text: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    title: {
        type: String
    },
    icon: {
        type: String
    }
},
{
    timestamps: true,
    collection: 'about'
});

AboutSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    
    object._id = _id;

    return object;
})

module.exports = db.resumeDB.model('about', AboutSchema)