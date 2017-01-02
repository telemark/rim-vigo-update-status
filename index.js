'use strict'

const getNextJob = require('./lib/get-next-job')

getNextJob()
  .then((file) => {
    console.log(file || 'Nothing to doooooooo!')
  })
  .catch((error) => {
    console.error(error)
  })