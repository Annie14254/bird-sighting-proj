const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const commentSchema = new Schema({
    username: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
    body: {
        type: String,
        required:true
    },
    createdAt: {
       type: Date,
       default: Date.now,
    }
});

const Comment = model('Comment', commentSchema);
module.exports = Comment;