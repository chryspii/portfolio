const mongoose = require('mongoose');
const db = require('./db_connection.js');

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }, {
        collection: 'article'
    }
);
ArticleSchema.methods.clap = function() {
    this.claps++;
    return this.save();
}
ArticleSchema.methods.comment = function(c) {
    this.comments.push(c);
    return this.save();
}
ArticleSchema.methods.addAuthor = function(author_id) {
    this.author = author_id;
    return this.save();
}
ArticleSchema.methods.getUserArticle = function(_id) {
    Article.find({'author': _id}).then((article) => {
        return article;
    })
}
// connect to specific collection
module.exports = db.resumeDB.model('article', ArticleSchema)