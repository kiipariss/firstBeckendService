import Router from "express";
import Post from "./Post.js";
import postController from "./postController.js";

const router = new Router()

router.post('/posts', postController.create)
router.get('/posts', postController.getALL)
router.get('/posts/:id', postController.getOne)
router.put('/posts', postController.update)
router.delete('/posts/:id', postController.delete)

export default router






















