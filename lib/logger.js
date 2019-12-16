function logger(req, res, next) {
  console.log(`${req.method} from ${req.url}`)
  next()
}

module.exports = logger