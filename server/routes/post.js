import express from "express"; //route need express framework

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();  //express main function

router.get('/', getPosts);
router.post('/', createPost);

export default router;