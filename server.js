const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const BlogRoutes = require('./src/routes/blog')
const connectDB = require('./src/setting/connectDB')
const imageupload = require('./src/controllers/imageupload')
const PORT = 4000
app.use(cors())
connectDB()
  .then(() => console.log('mongoDB is connected successfully'))
  .catch(() => console.log(error))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// API ROUTES / USER
app.use('/api/blog', BlogRoutes)
// app.use('/api/image', BlogRoutes)

// ERROR HANDLER

app.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT)
})
