const Blog = require('../models/blog')
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
    const result = await new Blog(req.body).save()
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
    const result = await Blog.findOne({ _id: req.params.id })
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
module.exports = {
  getBlogByBlogName,
  PostBlogByBlogName,
  getAllBlog,
  getBlogByBlogId,
  putBlogByBlogName,
  delBlogByBlogId
}
