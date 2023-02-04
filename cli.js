#!/usr/bin/env node

const args = require('yargs').argv
if(args.h || args.help){
  showHelp()
  process.exit(0)
}



var userOptions={}
if(args.e || args.env) userOptions.env=(args.e || args.env)
if(args.s || args.sample) userOptions.sample=(args.s || args.sample)
if(args.m || args.mask) userOptions.mask=(args.m || args.mask)
if(args.b || args.banner) userOptions.banner=(args.b || args.banner)



const envSample = require(`./env-sample.js`)
envSample(userOptions)


// try {


//   envSample()

// } catch(err) {
//   console.error(err)
// }


function showHelp() {

  let s = `
  Usage: env-sample [options]

  Options:

    -e, --env            source '.env' file relative or full path
    -s, --sample         target '.env-sample' file relative or full path
    -m, --mask           mask character. example: '*', default is ''
    -b, --banner         set your specified banner. to bottom of '.env-sample' file
    -v, --version        output the version number
    -h, --help           output usage information
`
}