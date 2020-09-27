#!/usr/bin/env node

const authenticateToAWS = require('../lib/authenticate-to-aws.js')

// [start-readme]
//
// This script is used by other scripts to update temporary AWS credentials and authenticate to S3.
// See docs at [Setting up awssume and S3cmd](https://github.com/github/product-documentation/tree/master/doc-team-workflows/workflow-information-for-all-writers/setting-up-awssume-and-s3cmd.md).
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
