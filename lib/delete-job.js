'use strict'

const fs = require('fs')
const config = require('../config')
const logger = require('./logger')

module.exports = (document) => {
  return new Promise((resolve, reject) => {
    const filePath = `${config.JOBS_DIRECTORY_PATH}/${document._id}.json`
    fs.unlink(filePath, (error) => {
      if (error) {
        logger(['delete-jobs', document._id, 'error', JSON.stringify(error)])
        reject(error)
      } else {
        const msg = `job deleted: ${filePath}`
        logger(['delete-jobs', document._id, msg])
        resolve(document)
      }
    })
  })
}
