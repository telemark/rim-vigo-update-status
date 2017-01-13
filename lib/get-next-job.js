'use strict'

const fs = require('fs')
const config = require('../config')
const logger = require('./logger')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(config.JOBS_DIRECTORY_PATH, (error, files) => {
      if (error) {
        logger(['get-next-job', 'error', JSON.stringify(error)])
        reject(error)
      } else {
        const file = files.filter(isJson)[0]
        if (file) {
          logger(['get-next-job', 'job found', file])
          resolve(file)
        } else {
          logger(['get-next-job', 'no jobs found'])
          process.exit(0)
        }
      }
    })
  })
}
