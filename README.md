
# env-sample
<a href="https://www.npmjs.com/package/env-sample"><img src="https://img.shields.io/npm/v/env-sample" alt="NPM Version" /></a> <a href="https://www.npmjs.com/package/env-sample"><img src="https://img.shields.io/npm/dm/env-sample" alt="NPM Downloads" /></a> [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiajupiter%2Fenv-sample&count_bg=%236495ED&title_bg=%23555555&icon=cliqz.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

[miajupiter.com](https://miajupiter.com) | [documentation](https://github.com/miajupiter/env-sample#readme)
## Table of contents

- [Introduction](#introduction)
- [CLI  Installation](#cli--installation)
  - [Install](#install)
  - [Usage](#usage)
- [Package Installation](#package-installation)
  - [Installation](#installation)
  - [Usage](#usage)
    - [default](#default)
    - [with `option` object parameter](#with-option-object-parameter)
- [Before After Example](#before-after-example)
  - [Before | Source `.env`](#before--source-env)
  - [After | Target `.env.sample`](#after--target-envsample)
- [License - MIT License](#license---mit-license)

## Introduction

Removes your secret values in `.env` file and generates `.env.sample` or `.env.dev` or `.env.test` etc. file. 
Supports multiline values (for example: *RSA PRIVATE KEY*) and protects your comments.

## CLI  Installation

### Install
```bash
npm install env-sample -g
```

### Usage

```bash
$ env-sample -h
```


```bash
  Usage: env-sample [options]

  Options:

  -e, --env            source '.env' file relative or full path
  -s, --sample         target '.env.sample' file relative or full path
  -m, --mask           mask character. example: '*', default is ''
  -b, --banner         set your specified banner. to bottom of '.env.sample' file
  -v, --version        output the version number
  -h, --help           output usage information

```
## Package Installation

### Installation
```bash
npm install env-sample --save
```

### Usage

#### default
```js
const envSample = require('env-sample')
envSample()
```
#### with `option` object parameter
```js
const envSample = require('env-sample')
const option={
	envPath: '.env',
	envSamplePath: '.env.sample',
	maskChar:''
}
envSample()
```
## Before After Example

### Before | Source `.env`
```md
# jwt variables
TOKEN_EXPIRES_IN=31536022 # valid for 1 year
TOKEN_PHRASE=upperWorld

# MongoDB variables
# password special chars -->  : / ? # [ ] @
# they must replace with uri equavalents :=%3A /=%2F ?=%3F #=%23 [=%5B ]=%5D @=%40
# mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
MONGODB_MAINDB_URI=mongodb://localhost:27017/restApi
MONGODB_USERDB_URI='mongodb://localhost:27017/'       # user database server

# Enable debug mode (true) or disable it (false).
DEBUG=false
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
Kh9NV...
...
-----END RSA PRIVATE KEY-----"   # Make this variable too, let's see!
MY_NAME=shamanCoders

TEST=4444
##########################  TEST 1 2 3 ######################################
```

### After | Target `.env.sample`
```md
# jwt variables
TOKEN_EXPIRES_IN= # valid for 1 year
TOKEN_PHRASE=

# MongoDB variables
# password special chars -->  : / ? # [ ] @
# they must replace with uri equavalents :=%3A /=%2F ?=%3F #=%23 [=%5B ]=%5D @=%40
# mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
MONGODB_MAINDB_URI=
MONGODB_USERDB_URI= # user database server

# Enable debug mode (true) or disable it (false).
DEBUG=false
PRIVATE_KEY= # Make this variable too, let's see!
MY_NAME=

TEST=
##########################  TEST 1 2 3 ######################################

# --------------------------------------------------------------------
# 2023-Now (c) MiaJupiter. All rights reserved. https://miajupiter.com
```

## License - MIT License

Copyright (c) 2023-**Now** [MiaJupiter Technology](https://miajupiter.com). All rights reserved. We are proud to be [Open Source](https://opensource.org). For full details about the license, please check the `LICENSE` file in the root directory of the source repository.
