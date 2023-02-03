#!/usr/bin/env node

try {
  const envSample=require(`./env-sample.js`)

  envSample()
    
} catch(err) {
  console.error(err)
}
