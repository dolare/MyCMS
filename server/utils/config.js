const config = {
  redisURL: process.env.redisURL
}

config.dbURL = process.env.dbURL

const dev = {
  port: 3000
}

const prod = {
  port: 3000
}

module.exports = Object.assign(
  process.env.NODE_ENV === 'production' ? prod : dev,
  config
)
