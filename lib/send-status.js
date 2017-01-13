'use strict'

const client = require('rim-service-client')
const config = require('../config')
const logger = require('./logger')

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
        logger(['send-status', data._id, 'status sent'])
        data.response = response
        resolve(data)
      })
      .catch((error) => {
        logger(['send-status', data._id, 'error', JSON.stringify(error)])
        reject(error)
      })
  })
}
