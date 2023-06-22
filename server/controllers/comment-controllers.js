const { Comment } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
    async createComment({body}, res){
        const newComment = await Comment.create(body);

        if(!newComment){
            console.log(err)
            return res.status(400).json({message: "Could not create comment"})
        }

        res.status(200).json({newComment})
    },
    async getAllComment(req, res){
        const allComment = await Comment.find({})

        if(!allComment){
            console.log(err)
            return res.status(400).json({message:"No comments found"})
        }
        res.status(200).json({allComment})
    },
    async getOneComment(req, res){
        const oneComment = await Comment.findById(req.params.id)

        if(!oneComment){
            console.log(err)
            return res.status(400).json({message: "No comment found with that ID"})
        }
        res.status(200).json({oneComment})
    },
    async updateComment(req, res) {
        const updateComment = await Comment.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body },
          { new: true }
        );
    
        if (!updateComment) {
          console.log(err);
          res.status(400).json({ message: "No comment found with that ID" });
        }
        res.status(200).json({ updateComment, new: true });
      },
    async deleteComment(req,res){
        const deleteComment = await Comment.findByIdAndDelete(req.params.id)

        if(!deleteComment){
            console.log(err)
            return res.status(400).json({message: "No comment found with that ID"})
        }
        res.status(200).json({message: "Deleted comment successfully"})
    }
}