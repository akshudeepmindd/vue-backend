const express = require('express')
const imageUploader = require('../controllers/imageupload')
const SlugController = require('../controllers/blog')

const router = express.Router()
const BlogController = require('../controllers/blog')
router.get('/', BlogController.getAllBlog)
router.post('/create', BlogController.PostBlogByBlogName)
router.put('/update', BlogController.putBlogByBlogName)
router.post('/upload', imageUploader.fileFilter)
router.get('/:slug', SlugController.getSlug)
module.exports = router
