const mongoose = require('mongoose');
const db = require('./db_connection.js');

let UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
    collection: 'users'
});

UserSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;

    return object;
})

module.exports = db.resumeDB.model('users', UserSchema)