const Blog = require('../models/blog')
const multer = require('multer')
const Slug = require('../models/blog')
const fs = require('fs')
const path = require('path')
const filename = require('../controllers/imageupload')
const cloudinary = require('cloudinary')
const { response } = require('express')

const getBlogByBlogName = async (req, res) => {
  try {
    const result = await Blog.find(req.params.articlename)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
const PostBlogByBlogName = async (req, res) => {
  try {
    // // await
    // cloudinary.v2.uploader.upload(
    //   path.join(__dirname + '/upload/' + req.file.filename),
    //   (err, res) => {
    //     if (err) {
    //     } else {
    //       console.log(res)
    //     }
    //   }
    // )

    console.log(
      fs.readFileSync(path.join(__dirname + '/upload/' + req.file.filename)),
      'cloudinary'
    )
    const result = await new Blog({
      ...req.body,
      blog_image: {
        data: fs.readFileSync(
          path.join(__dirname + '/upload/' + req.file.filename)
        ),
        contentType: 'image/png'
      }
    }).save()
    console.log('save')
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
const getAllBlog = async (req, res) => {
  try {
    const result = await Blog.find()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
const getBlogByBlogId = async (req, res) => {
  try {
    const result = await Blog.findOne({ slug: req.params.slug })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
const putBlogByBlogName = async (req, res) => {
  try {
    const result = await Blog.findByIdAndUpdate(
      req.params.id,
      req.params.blogname
    )
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
const delBlogByBlogId = async (req, res) => {
  try {
    const result = await Blog.deleteOne({ _id: req.params.id })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const getSlug = async (req, res) => {
  try {
    const result = Slug.find({ slug: req.params.slug })
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}
module.exports = {
  getBlogByBlogName,
  PostBlogByBlogName,
  getAllBlog,
  getBlogByBlogId,
  putBlogByBlogName,
  delBlogByBlogId,
  getSlug
}
