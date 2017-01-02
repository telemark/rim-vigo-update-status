'use strict'

const envs = process.env

module.exports = {
  QUEUE_DIRECTORY_PATH: envs.QUEUE_DIRECTORY_PATH || 'test/data/queue',
  ERRORS_DIRECTORY_PATH: envs.ERRORS_DIRECTORY_PATH || 'test/data/errors',
  URL: envs.URL || 'https://vigo.dummy.allthethings.win',
  USERNAME: envs.USERNAME || 'my-username',
  PASSWORD: envs.PASSWORD || 'my-password'
}
