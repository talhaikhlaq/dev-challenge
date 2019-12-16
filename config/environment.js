const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/jdlt-sample-data'
const secret = process.env.SECRET || 'this can be any string i want'

module.exports = {
  port: port,
  dbURI: dbURI,
  secret: secret
}