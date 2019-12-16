const router = require('express').Router()
const sampleDataset = require('../controllers/sampleDataset')

router.route('/sampleDataset').get(sampleDataset.index)
router.route('/sampleData').get(sampleDataset.show)

module.exports = router