const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const blog = new mongoose.Schema(
  {
    blog_title: { type: String, slug: 'title' },
    slug: { type: String, slug: 'title' },
    blog_description: { type: String },
    blog_image: { type: String },
    keywords: {
      type: Array
    }
  },
  {
    timestamps: true
  }
)
blog.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) next()
    this.password = hash
    next()
  })
})
module.exports = mongoose.model('Blog', blog)
