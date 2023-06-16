const { Sighting } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    async createPost({body}, res){
        const newPost = await Sighting.create(body);

        if(!newPost){
            console.log(err)
            return res.status(400).json({message: "Could not create sighting"})
        }

        res.status(200).json({newPost})
    },
    async getAllPost(req, res){
        const allPost = await Sighting.find({})

        if(!allPost){
            console.log(err)
            return res.status(400).json({message:"No sightings found"})
        }
        res.status(200).json({allPost})
    },
    async getOnePost(req, res){
        const onePost = await Sighting.findById(req.params.id)

        if(!onePost){
            console.log(err)
            return res.status(400).json({message: "No sighting found with that ID"})
        }
        res.status(200).json({onePost})
    },
    async updatePost(req, res) {
        const updatePost = await Sighting.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
    
        if (!updatePost) {
          console.log(err);
          res.status(400).json({ message: "No sighting found with that ID" });
        }
        res.status(200).json({ updatePost, new: true });
      },
    async deletePost(req,res){
        const deletePost = await Sighting.findByIdAndDelete(req.params.id)

        if(!deletePost){
            console.log(err)
            return res.status(400).json({message: "No sighting found with that ID"})
        }
        res.status(200).json({message: "Deleted post successfully"})
    }
}