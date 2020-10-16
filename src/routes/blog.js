const express = require('express')
const imageUploader = require('../controllers/imageupload').upload
const SlugController = require('../controllers/blog')

const router = express.Router()
const BlogController = require('../controllers/blog')
router.get('/', BlogController.getAllBlog)
router.get('/p/:slug', BlogController.getBlogByBlogId)
router.post(
  '/create',
  imageUploader.single('blog_image'),
  BlogController.PostBlogByBlogName
)
router.put('/update', BlogController.putBlogByBlogName)
router.get('/:slug', SlugController.getSlug)
module.exports = router
