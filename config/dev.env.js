'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('../config')
const portUsed = process.env.PORT || config.dev.port

module.exports = merge(prodEnv, {
  NODE_ENV: 'development',
  AUTH0_CALLBACK_URL: 'http://localhost:' + portUsed,
})
