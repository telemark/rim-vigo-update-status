'use strict'

const client = require('rim-service-client')
const config = require('../config')

module.exports = (data) => {
  return new Promise((resolve, reject) => {
    const args = client.saveStatusArchived(data)

    const clientOpts = {
      url: config.URL,
      username: config.USERNAME,
      password: config.PASSWORD,
      data: args
    }

    client(clientOpts)
      .then((response) => {
        data.response = response
        resolve(data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
