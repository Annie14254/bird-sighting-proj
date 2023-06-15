const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
    species: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = model('User', userSchema);
module.exports = User;