'use strict'

const envs = process.env

module.exports = {
  DONE_DIRECTORY_PATH: envs.DONE_DIRECTORY_PATH || 'test/data/done',
  ERRORS_DIRECTORY_PATH: envs.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  QUEUE_DIRECTORY_PATH: envs.QUEUE_DIRECTORY_PATH || 'test/data/queue',
  URL: envs.URL || 'https://vigo.dummy.allthethings.win',
  USERNAME: envs.USERNAME || 'my-username',
  PASSWORD: envs.PASSWORD || 'my-password',
  fireBase: {
    databaseURL: envs.FIREBASE_URL || 'https://seneca-firebase-test.firebaseio.com'
  }
}
