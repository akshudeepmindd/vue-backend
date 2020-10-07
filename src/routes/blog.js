const express = require('express')

const router = express.Router()
const BlogController = require('../controllers/blog')
router.get('/get',BlogController.getAllBlog)
router.post('/create',BlogController.PostBlogByBlogName)
router.put('/update',BlogController.putBlogByBlogName)
module.exports = router
