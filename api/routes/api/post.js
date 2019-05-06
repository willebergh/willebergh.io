const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const config = require("config");

// Post model
const Post = require("../../models/post");

// @route   GET /api/post
// @desc    Get all posts
// @access  Public
router.get("/", (req, res) => {
    Post.find().sort({ date: -1 })
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(400).json({
                msg: "Something went wrong, please try again.",
                err: err
            });
            console.log(err);
        })
});

// @route   POST /api/post
// @desc    Create a new post
// @access  Private
router.post("/", auth, (req, res) => {
    const { title, content } = req.body;

    // Simple validation
    if (!title || !content) {
        return res.status(400).json({ msg: "Please enter all fields." });
    } else {

        const newPost = new Post({
            title,
            content,
        });

        User.findById(req.user.id)
            .select("-password")
            .then(user => {
                newPost.author = user._id;
                newPost.save()
                    .then(post => {
                        res.status(200).json({
                            msg: "Created new post successfully",
                            postId: post.id
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            msg: "Something went wrong, please try again.",
                            err: err
                        });
                        console.log(err);
                    });
            });
    }
});

// @Route   DELETE /api/menu/item
// @Desc    Delete an item
// @Access  Public => Private
router.delete("/:id", auth, (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove()
            .then(() => res.status(200).json({ msg: "Success" }))
        )
        .catch(err => res.status(400).json({
            msg: "Someting went wrong, please try again.", err
        }));
});

module.exports = router;