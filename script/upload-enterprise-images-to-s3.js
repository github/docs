#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const patterns = require('../lib/patterns.js')
const enterpriseServerReleases = require('../lib/enterprise-server-releases').all
const authenticateToAWS = require('../lib/authenticate-to-aws.js')
const walk = require('walk-sync')
const mime = require('mime/lite')

let assetsPath = path.join(__dirname, '../assets')
let devCheckout

// [start-readme]
//
// Run this script to:
// [upload individual files to S3](https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/adding-individual-images-to-earlier-verisons-of-enterprise.md)
// or:
// [upload a batch of files to S3 for a new Enterprise release](https://github.com/github/product-documentation/blob/master/doc-team-workflows/working-on-enterprise-releases/information-for-all-writers/storing-a-batch-of-assets-on-s3-for-a-new-release.md).
// Run `upload-enterprise-images-to-s3.js --help` for usage details.
//
// [end-readme]

main()

async function main () {
  // auth to aws
  const s3 = await authenticateToAWS()

  // parse options and args
  const program = await setUpOptions()

  // make sure options and args are provided
  await checkIfOptionsProvided(program)

  // make sure options are valid
  const options = await checkIfOptionsValid(program)

  // check whether bucket exists (for single upload) or not (for batch upload)
  await checkForBucket(s3, program, options)

  // gather assets
  let imageFiles = []
  if (program.single) imageFiles.push(options.imagePath)
  if (program.batch) imageFiles = gatherAssets()

  // show message before uploading
  const bucketPath = program.core
    ? `enterprise/${options.gheVersion}/`
    : `enterprise/developer-site/${options.gheVersion}/`

  const uploadMessage = program.single
    ? `Uploading ${options.imagePath} to the ${bucketPath} S3 bucket...\n`
    : `Uploading ${imageFiles.length} assets to a new ${bucketPath} S3 bucket...\n`

  console.log(uploadMessage)

  // do the upload
  imageFiles.forEach(file => {
    uploadFile(s3, bucketPath, file)
  })
}

// set up options and args
async function setUpOptions () {
  program
    .description('Upload assets from a local checkout to the github-images bucket in Amazon S3.')
    .option('-c, --core', 'upload assets for core docs at help.github.com')
    .option('-d, --developer <path to dev checkout>', 'upload assets for dev docs at developer.github.com')
    .option('-s, --single <image path> <GHE version>', 'upload a single local asset file to an existing Enterprise bucket in S3')
    .option('-b, --batch <GHE version>', 'upload all local assets to a new Enterprise bucket in S3')

  program.on('--help', () => {
    console.log('')
    console.log('Examples:')
    console.log('  $ script/upload-enterprise-images-to-s3.js --core --single assets/images/foo/bar.png 2.15')
    console.log('  $ script/upload-enterprise-images-to-s3.js --developer ~/checkouts/dev-docs --batch 2.17')
  })

  program.parse(process.argv)

  return program
}

// check that required options and args are provided
async function checkIfOptionsProvided (program) {
  // find assets for developer site
  if (program.developer) {
    devCheckout = program.developer
    try {
      process.chdir(devCheckout)
      assetsPath = path.join(devCheckout, 'assets')
    } catch (err) {
      console.log(`Error! Developer checkout at ${devCheckout} does not exist.\n`)
      program.help()
    }
  }

  // must pass either --single or --batch
  if ((program.single && program.batch) || (!program.single && !program.batch)) {
    console.log('Error! You must specify single or batch upload.\n')
    program.help()
  }

  // must pass either --core or --developer
  if ((program.core && program.developer) || (!program.core && !program.developer)) {
    console.log('Error! You must specify core docs or developer docs.\n')
    program.help()
  }

  // for single uploads, two args are required: image path + version
  // commander will catch one missing arg but not both
  // (this is why we don't need a separate check for batch uploads, which only require a version arg)
  const requiredArgs = program.developer ? 7 : 6
  if (program.single && process.argv.length !== requiredArgs) {
    console.log('Error! You must enter an image path and an Enterprise version.\n')
    program.help()
  }
}

// check that required options and args are valid, and return them if so
async function checkIfOptionsValid (program, options) {
  let imagePath, gheVersion

  if (program.single) {
    imagePath = program.developer ? `${path.dirname(assetsPath)}/` + String(process.argv[5]) : String(process.argv[4])
    gheVersion = program.developer ? String(process.argv[6]) : String(process.argv[5])

    // make sure we can find the image file
    if (!fs.existsSync(imagePath)) {
      console.log(`Error! Image path ${imagePath} does not exist.\n`)
      program.help()
    }

    // for a single upload, the GHE version must already exist
    if (!enterpriseServerReleases.includes(gheVersion)) {
      console.log(`Error! Enterprise version ${gheVersion} not found.\n`)
      program.help()
    }
  }

  if (program.batch) {
    gheVersion = program.developer ? String(process.argv[5]) : String(process.argv[4])

    // test version number against tried-and-true regex for validity
    if (!patterns.getEnterpriseVersionNumber.test(`enterprise/${gheVersion}`)) {
      console.log(`Error! Enterprise version number ${gheVersion} is invalid.\n`)
      program.help()
    }
  }

  return {
    imagePath: imagePath,
    gheVersion: gheVersion
  }
}

// check whether the version bucket exists
async function checkForBucket (s3, program, options) {
  const prefix = options.core
    ? `enterprise/${options.gheVersion}/`
    : `enterprise/developer-site/${options.gheVersion}/`

  try {
    const params = {
      Prefix: prefix,
      Delimiter: '/',
      Bucket: 'github-images'
    }

    // if version dir exists, data.Prefix will be 'enterprise/<version>/assets/'
    const data = await s3.listObjects(params).promise()

    // bucket must already exist if uploading a single image
    if (program.single && !data.Prefix.includes(options.gheVersion)) {
      console.error(`Error! Bucket for ${options.gheVersion} does not exist yet.\n`)
      program.help()
    }
  } catch (e) {
    console.error(`Error getting bucket: ${e.message}`)
    process.exit(1)
  }
}

async function uploadFile (s3, bucketPath, file) {
  // key param is the filepath within the bucket
  const key = getKeyPath(bucketPath, file)

  // default content type is application/octet-stream, but that doesn't work for SVG,
  // so we need to provide a content type with the real mime type where possible
  const mimeType = mime.getType(file) || 'application/octet-stream'

  try {
    const params = {
      Key: key,
      Bucket: 'github-images',
      ACL: 'public-read',
      ContentType: mimeType,
      Body: fs.createReadStream(file)
    }
    // print data to console so we can watch upload progress
    const data = await s3.upload(params).promise()
    console.log(data)
  } catch (e) {
    console.error(`Error uploading file: ${e.message}`)
    process.exit(1)
  }
}

// include all file extensions except Markdown
function gatherAssets () {
  return walk(assetsPath, {
    includeBasePath: true,
    directories: false
  }).filter(file => !file.endsWith('.md'))
}

// for core docs, key path should look like enterprise/<version>/assets/images/foo/bar.png
// for dev docs, key path should look like enterprise/developer-site/<version>/assets/images/foo/bar.png
function getKeyPath (bucketPath, file) {
  const basePath = devCheckout
    ? file.replace(devCheckout, '')
    : file.replace(path.dirname(__dirname), '')
  return path.join(bucketPath, basePath)
}
