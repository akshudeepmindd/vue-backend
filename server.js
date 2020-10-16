const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const BlogRoutes = require('./src/routes/blog')
const connectDB = require('./src/setting/connectDB')
const imageupload = require('./src/controllers/imageupload')

const path = require('path')
const PORT = 4000
app.use('uploads/', express.static(path.join(__dirname, '/controllers/upload')))
app.use(cors())
connectDB()
  .then(() => console.log('mongoDB is connected successfully'))
  .catch(() => console.log(error))
  app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false, parameterLimit: 5000 }))
app.use(bodyParser.json({ limit: '50mb' }))
// API ROUTES / USER
app.use('/api/blog', BlogRoutes)
// app.use('/api/image', BlogRoutes)

// ERROR HANDLER

app.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT)
})
