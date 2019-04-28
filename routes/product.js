const express = require('express')
const router = express.Router()
const slugify = require ('slugify')
const uniqid = require ('uniqid')
const Product = require('../models/product')



router.get('/', (req, res) => {
  res.send('halaman produk')
})

router.post('/', (req, res) => {
  res.send(req.body)

  const { name, variants } = req.body

  new Product({
    name,
    slug: uniqid(`${slugify(name.toLowerCase())}-`),
    rating: 0,
    timestamp: new Date(),
    variants: JSON.parse(variants),
    reviews: []
  }).save().then(() => {
    console.log('data berhasil diinput')
  })
})

// new Product({
//   name: 'Contoh Produk'
// }).save().then(() => {
//   console.log('data berhasil diinput')
// })

module.exports = router
