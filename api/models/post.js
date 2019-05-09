const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Object,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Post = mongoose.model("post", PostSchema);
