<p align="center">
<a href="https://miajupiter.com" _target="blank">
<img src="https://github.com/miajupiter/.github/raw/main/images/miajupiter-logo.png"  width="320" />
</a>

[![](https://img.shields.io/badge/%F0%9F%8C%90%20www-miajupiter.com-blueviolet?style=flat&labelColor=%23323232)](https://miajupiter.com)


# env-sample 

[![npm](https://img.shields.io/npm/v/env-sample?label=npm&logo=npm) ](https://www.npmjs.com/package/env-sample) [![download](https://img.shields.io/npm/dt/env-sample?label=downloads&logo=npm)](https://www.npmjs.com/package/env-sample) [![GitHub](https://img.shields.io/github/license/miajupiter/sms-auth)](https://choosealicense.com/licenses/mit/) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiajupiter%2Fenv-sample&count_bg=%236495ED&title_bg=%23323232&icon=cliqz.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com) [![](https://img.shields.io/badge/readme-docs-chocolate.svg)](https://github.com/miajupiter/env-sample#readme) [![](https://img.shields.io/github/stars/miajupiter/env-sample?color=yellow&label=stars&logo=github)](https://github.com/miajupiter/env-sample/stargazers)


## Table of contents

- [Introduction](#introduction)
- [CLI  Installation](#cli--installation)
  - [Install](#install)
  - [Usage](#usage)
- [Package Installation](#package-installation)
  - [Install](#installation)
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
  
  -e, --env             Source file. default is ".env"
  -s, --sample          Target file. default ".env.sample"
  -m, --mask            Mask character. example: "*", " ", etc.
                        default is "" (empty string)
  -b, --banner          Set your banner to bottom of target.
      --banner=""       Remove default banner.
  -w, --watch           Watch source file. If the source file is deleted,
                        the target file is also deleted.
  -v, --version         output the version number
  -h, --help            output usage information
```


## Package Installation

### Installation
```bash
npm install env-sample
```

### Usage

#### default
```js
const envSample = require('env-sample')
envSample()
```
#### with `option` object parameter

```javascript
const envSample = require('env-sample')
const options={
	env: '.env',
	sample: '.env.sample',
	mask: '',
	watch: false,
	banner:`2023-Now (c) MiaJupiter. All rights reserved. https://miajupiter.com`
}
envSample(options)
```
## Before After Example

### Before | Source `.env`

```dosini
# jwt variables
TOKEN_EXPIRES_IN=31536022 # valid for 1 year
TOKEN_PHRASE=upper520World

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
crt ys 319612719849...589317318614
Kh9NV...
...
-----END RSA PRIVATE KEY-----"   # Make this variable too, let's see!
MY_NAME=shamanCoders
USER_ID=319817318  # for all mankind
TEST=4445
##########################  TEST 7 7 7 ######################################
```

### After | Target `.env.sample`

```dosini
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
USER_ID= # for all mankind
TEST=
##########################  TEST 7 7 7 ######################################

# --------------------------------------------------------------------
# 2023-Now (c) MiaJupiter. All rights reserved. https://miajupiter.com
```

## License - MIT License

Copyright (c) 2023-**Now** [MiaJupiter Technology Inc.](https://miajupiter.com). All rights reserved. We are proud to be [Open Source](https://opensource.org). For full details about the license, please check the `LICENSE` file in the root directory of the source repository.
