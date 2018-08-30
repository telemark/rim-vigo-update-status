[![Build Status](https://travis-ci.org/telemark/rim-vigo-update-status.svg?branch=master)](https://travis-ci.org/telemark/rim-vigo-update-status)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# rim-vigo-update-status

Updates VIGO with archive status for document

## Config

docker.env

```bash
DONE_DIRECTORY_PATH=test/data/done
ERRORS_DIRECTORY_PATH=test/data/errors
QUEUE_DIRECTORY_PATH=test/data/queue
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

- This will start a container. 
- Check for jobs in the queue directory.
- Send status.
- Stop the container and remove it.

## Related

- [rim-vigo-data-pull](https://github.com/telemark/rim-vigo-data-pull) Pulls data from VIGO
- [rim-vigo-saksbehandling](https://github.com/telemark/rim-vigo-saksbehandling) Formats documents for archive
- [rim-laurentius](https://github.com/telemark/rim-laurentius) Archives the formatted data to Public360
- [rim-service-client](https://github.com/telemark/rim-service-client) Module for connecting ISI-lokal
- [robot-stats](https://github.com/telemark/robot-stats) Collect stats for your dashboard
- [next-dashboard-rambo](https://github.com/telemark/next-dashboard-rambo) Dashboard for RAMBO

# License

[MIT](LICENSE)
