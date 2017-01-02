'use strict'

const fs = require('fs')
const config = require('../config')
const isJson = (file) => file.endsWith('.json')

module.exports = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(config.QUEUE_DIRECTORY_PATH, (error, files) => {
      if (error) {
        reject(error)
      } else {
        resolve(files.filter(isJson)[0])
      }
    })
  })
}
