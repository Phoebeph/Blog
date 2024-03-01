import PostMessage from "../models/postMessage.js";// access to a real post model


//each call back function has try-catch block with async-await
export const getPosts =  (async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); //search from the database
        
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
    // res.send('THIS WORKS');
})

export const createPost = (async (req, res) => {
    const post = req.body; // retrive requested data user input

    const newPost = new PostMessage(post); //instance of the post model
    try {
        await newPost.save(); //update the new post to database

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
    // res.send('Post Creation');
});