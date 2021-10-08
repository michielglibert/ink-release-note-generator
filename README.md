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

It was made with [ink](https://github.com/vadimdemedes/ink).

## Install

If you want to tool as a global command do the following:

```bash
$ npm install --global wg-fe-changelog-generator
```

If you want to use the file build by webpack you can do the following:

```bash
$ node ./build/changelog.js
```

## Bundle

If you made changes and want to bundle the project again, execute the following:

```bash
$ npm run bundle
```

## Run

If installed as a global command, simply run the command as follows:

```bash
$ wg-fe-changelog-generator
```

You can also add a root argument to change the folder for where the releasenotes should be saved to:

```bash
$ wg-fe-changelog-generator --root=dir
```

Same goes for the `changelog.js` file:

```bash
$ node changelog.js --root=dir
```
