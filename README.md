# wg-fe-changelog-generator

This project is a simple CLI tool to generate releasenotes for the `wg-fe-broker-platform` project in the following format:

```json
{
	"type": "",
	"project": "",
	"message": "",
	"flag": false
}
```

## Install

```bash
$ npm install --global ink-release-note-generator
```

## CLI

```
$ ink-release-note-generator --help

  Usage
    $ ink-release-note-generator

  Options
    --name  Your name

  Examples
    $ ink-release-note-generator --name=Jane
    Hello, Jane
```
