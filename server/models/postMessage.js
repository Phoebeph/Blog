import mongoose from "mongoose";

//schema to specify the context of each post in document
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, //to convert 'image' into string using base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

//make schema a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;