const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const SampleData = require('../models/sampleData')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  db.dropDatabase()
  SampleData.create([
    {
      supplier: 'New Co Ltd',
      product: 'Small wongle',
      price: 5
    },
    {
      supplier: 'New Co Ltd',
      product: 'Large wongle',
      price: 8
    },
    {
      supplier: 'New Co Ltd',
      product: 'Super wongle',
      price: 12
    },
    {
      supplier: 'Old Co Ltd',
      product: 'Mini wongle',
      price: 4
    },
    {
      supplier: 'Old Co Ltd',
      product: 'Small wongle',
      price: 6
    },
    {
      supplier: 'Old Co Ltd',
      product: 'Large wongle',
      price: 9
    },
    {
      supplier: 'Old Co Ltd',
      product: 'Super wongle',
      price: 13
    }
  ])

    .then(SampleData => console.log(`${SampleData.length} sample dataset created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})