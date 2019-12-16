const SampleData = require('../models/sampleData')

function indexRoute(req, res) {
  SampleData
    .find(req.query)
    .then(sampleData => {
      if(!sampleData) {
        return res.sendStatus(404)
      } else return res.status(200).json(sampleData)
    })
}

function showRoute(req, res) {
  SampleData
    .findOne({ supplier: req.query.supplier, product: req.query.product })
    .then(sampleData => {
      if(!sampleData) {
        return res.sendStatus(404)
      } else return res.status(200).json(sampleData)
    })
}

module.exports = { index: indexRoute, show: showRoute }