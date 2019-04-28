require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require ('body-parser')
const multer = require ('multer')
const productRoutes = require('./routes/product')
const app = express()

app.use(cors())
//cors biar bisa beda url, satunya 8000 satunya 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(multer().any())


mongoose.connect(
  process.env.DB_CLUSTER_URL,
  { useNewUrlParser: true },
  () => {
    console.log('terhubung ke mongodb')
  }
)

app.use('/api/products', productRoutes)

app.listen(8000)
