const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt")

const sightingSchema = new Schema({
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

const Sighting = model('Sighting', sightingSchema);
module.exports = Sighting;