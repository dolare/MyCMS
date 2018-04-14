const Redis = require('ioredis')
const logger = require('./logger')
const config = require('./config')

const redis = new Redis(config.redisURL)

redis.on('error', function (err) {
  logger.error('Redis connected fail.')
  logger.error(err)
  process.exit(-1)
})

module.exports = redis
