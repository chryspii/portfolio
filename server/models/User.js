const mongoose = require('mongoose');
const db = require('./db_connection.js');

let UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String,
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }, {
        collection: 'user'
    }
)
UserSchema.methods.follow = function (user_id) {
    if (this.following.indexOf(user_id) === -1) {
        this.following.push(user_id)        
    }
    return this.save()
}
UserSchema.methods.addFollower = function (fs) {
    this.followers.push(fs)        
}
// connect to specific collection
module.exports = db.resumeDB.model('user', UserSchema)