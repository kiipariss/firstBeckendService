import Post from "./Post.js"
import postService from "./postService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await postService.create(req.body, req.files.picture)
            res.status(200).json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getALL(req, res) {
        try {
            const posts = await postService.getALL()
            return res.json(posts)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await postService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }


    async update(req, res) {
        try {
            const updatePost = await postService.update(req.body)
            return res.json(updatePost)
        }
        catch (e) {
            res.status(500).json(e.message)
        }
    }


    async delete(req, res) {
        try {
            const post = await postService.create(req.params.id)
            return res.json(post)
        }
        catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()