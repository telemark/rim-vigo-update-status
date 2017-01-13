[![Build Status](https://travis-ci.org/telemark/rim-vigo-update-status.svg?branch=master)](https://travis-ci.org/telemark/rim-vigo-update-status)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# rim-vigo-update-status
Updates VIGO with latest status

## Config

docker.env

```bash
JOBS_DIRECTORY_PATH=test/data/jobs
ERRORS_DIRECTORY_PATH=test/data/error
URL=https://vigo.dummy.allthethings.win
USERNAME=my-username
PASSWORD=my-password
```

## Docker

Build

```bash
$ docker build -t rim-vigo-update-status .
```

### Usage

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm rim-vigo-update-status
```

or from pre-built image

```bash
$ docker run --env-file=docker.env --volume=/test/data:/src/test/data --rm telemark/rim-vigo-update-status
```

This will start a container. Check for jobs in the job directory. Send status. Stop the container and remove it.

# License
[MIT](LICENSE)