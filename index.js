'use strict'

const getNextJob = require('./lib/get-next-job')
const getFileData = require('./lib/get-file-data')
const sendStatus = require('./lib/send-status')
const saveDocument = require('./lib/save-document')
const deleteJob = require('./lib/delete-job')
const logger = require('./lib/logger')

getNextJob()
  .then(getFileData)
  .then(sendStatus)
  .then(saveDocument)
  .then(deleteJob)
  .then((data) => {
    logger('finished')
  })
  .catch((error) => {
    logger(['error', JSON.stringify(error)])
  })
