// next.config.js
const withOffline = require('next-offline')

module.exports = withOffline({
  webpack(config, options) {
    return config
  }
})
