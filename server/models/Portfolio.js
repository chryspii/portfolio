const mongoose = require('mongoose');
const db = require('./db_connection.js');

let PorfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    text: {
        type: [String]
    },
    url: {
        type: String
    }
},
{
    timestamps: true,
    collection: 'portfolio'
});

PorfolioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    
    object._id = _id;

    return object;
})

module.exports = db.resumeDB.model('portfolio', PorfolioSchema)