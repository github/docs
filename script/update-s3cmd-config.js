#!/usr/bin/env node

const authenticateToAWS = require('./helpers/authenticate-to-aws.js')

// [start-readme]
//
// This script is used by other scripts to update temporary AWS credentials and authenticate to S3.
//
// [end-readme]

main()

async function main () {
  const s3 = await authenticateToAWS()
  if (s3) {
    console.log('You are authenticated to s3!')
  } else {
    console.error('Something went wrong!')
  }
}
