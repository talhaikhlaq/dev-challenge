/* global api, describe, it, expect, before, after */

require('../spec_helper')
const sampleData = require('../../models/sampleData')

describe('GET /sampleDataset', () => {

  // CREATE SAMPLE DATA FOR TESTING
  before(done => {
    sampleData.create({
      supplier: 'Old Co Ltd',
      product: 'Large wongle',
      price: 5
    })
      .then(() => done())
  })

  // REMOVE SAMPLE DATA FOLLOWING TESTING
  after(done => {
    sampleData.deleteMany({})
      .then(() => done())
  })

  // INDEX ROUTE TESTS
  it('should return a 200 response', (done) => {
    api.get('/api/sampleDataset')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', (done) => {
    api.get('/api/sampleDataset')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should return an array of objects', (done) => {
    api.get('/api/sampleDataset')
      .end((err, res) => {
        expect(res.body[0]).to.be.an('object')
        done()
      })
  })

  // SHOW ROUTE TESTS
  it('should return an object', (done) => {
    api.get('/api/sampleData')
      .query({ supplier: 'Old Co Ltd', product: 'Large wongle' })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return a 404 response', (done) => {
    api.get('/api/sampleData')
      .query({ supplier: 'Old Co Ltd', product: 'super Wongle' })
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return the correct object fields', (done) => {
    api.get('/api/sampleData')
      .query({ supplier: 'Old Co Ltd', product: 'Large wongle' })
      .end((err, res) => {
        expect(res.body).to.contain.keys([ '_id', 'supplier', 'product', 'price' ])
      })
    done()
  })

  it('should match the model data types', (done) => {
    api.get('/api/sampleData')
      .query({ supplier: 'Old Co Ltd', product: 'Large wongle' })
      .end((err, res) => {
        expect(res.body._id).to.be.a('string'),
        expect(res.body.supplier).to.be.a('string'),
        expect(res.body.product).to.be.a('string'),
        expect(res.body.price).to.be.a('number')
      })
    done()
  })

})