const mongoose = require('mongoose');
const db = require('./db_connection.js');

let PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
    collection: 'posts'
});

PostSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;

    return object;
})

module.exports = db.resumeDB.model('posts', PostSchema)