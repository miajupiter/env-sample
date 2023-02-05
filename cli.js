#!/usr/bin/env node

const args = require('yargs').argv
console.log(`args`, args)
console.log(`process.argv`, process.argv)
console.log(`process.argv0`, process.argv0 )

if(args.h || args.help){
  let s=`
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
`
  console.log(s)
  process.exit(0)
}

if(args.v || args.version){
  console.log(require('./package.json').version)
  process.exit(0)
}

/* otherwise continue main process */
const envSample = require(`./env-sample.js`)

let userOptions={}
if(args.e || args.env) userOptions.env=(args.e || args.env)
if(args.s || args.sample) userOptions.sample=(args.s || args.sample)
if(args.m || args.mask) userOptions.mask=(args.m || args.mask)
if(args.b || args.banner) userOptions.banner=(args.b || args.banner)
if(args.w || args.watch) userOptions.watch=(args.w || args.watch)

envSample(userOptions)
