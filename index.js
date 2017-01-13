'use strict'

const getNextJob = require('./lib/get-next-job')
const getFileData = require('./lib/get-file-data')
// const sendStatus = require('./lib/send-status')

getNextJob()
  .then(getFileData)
  .then((data) => {
    console.log(data || 'Nothing to doooooooo!')
  })
  .catch((error) => {
    console.error(error)
  })
