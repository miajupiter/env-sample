#!/usr/bin/env node

try {
  const envSample=require(`./env-sample.js`)

  console.log(process.argv)
  
  envSample()
    
} catch(err) {
  console.error(err)
}
