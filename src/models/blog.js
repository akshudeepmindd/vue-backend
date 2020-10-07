const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const blog = new mongoose.Schema(
  {
    title: { type: String },
    email: { type: String, unique: true }
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
