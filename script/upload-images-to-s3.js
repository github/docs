#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const allVersions = require('../lib/all-versions')
const authenticateToAWS = require('./helpers/authenticate-to-aws')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')
const { getS3BucketPathFromVersion } = require('../lib/s3-bucket-path-utils')
const walk = require('walk-sync')
const mime = require('mime/lite')

const supportedS3Versions = Object.keys(allVersions)
  .filter(version => version !== nonEnterpriseDefaultVersion)

const assetsPath = path.join(__dirname, '../assets')

// [start-readme]
//
// Use this script to upload individual or batched asset files to a versioned S3 bucket.
// Run `upload-images-to-s3.js --help` for usage details.
//
// [end-readme]

program
  .description('Upload assets from a local checkout to a versioned github-images bucket in Amazon S3.')
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .option('-s, --single <image path>', 'Upload a single local asset file at the given path.')
  .option('-b, --batch', 'Upload all local assets.')
  .option('-v, --version <version>', 'The version of the S3 bucket to upload to.')
  .option('-a, --allVersions', '(single transfers only) Upload the image to all currently supported versions of S3.')
  .option('-d, --dryRun', 'print what will be uploaded without actually uploading.')
  .on('--help', () => {
    console.log('')
    console.log('Examples:')
    console.log('  $ script/upload-images-to-s3.js --single assets/images/foo/bar.png --version enterprise-server@2.22')
    console.log('  $ script/upload-images-to-s3.js --single assets/images/foo/bar.png --allVersions')
    console.log('  $ script/upload-images-to-s3.js --batch --version enterprise-server@2.22')
  })
  .parse(process.argv)

const options = program.opts()

// verify CLI options
if ((options.single && options.batch) || (!options.single && !options.batch)) {
  console.log('Error! You must specify single or batch upload.\n')
  program.help()
}

if (options.allVersions && !options.single) {
  console.log('Error! You can only specify all versions during a single upload.\n')
  program.help()
}

if (options.allVersions && options.version) {
  console.log('Error! You cannot specify all versions and a version at the same time.\n')
  program.help()
}

// we may need to update this check if we ever have to upload images for a deprecated version
if (!options.allVersions && !supportedS3Versions.includes(options.version)) {
  console.log('Error! You must enter the full name of a supported version, e.g., enterprise-server@2.22 or github-ae@latest.\n')
  program.help()
}

if (options.single && !fs.existsSync(options.single)) {
  console.log(`Error! Image path ${options.single} does not exist.\n`)
  program.help()
}

if (options.dryRun) {
  console.log('This is a dry run! Displaying messages without actually uploading.\n')
}
main()

async function main () {
  // auth to aws
  const s3 = await authenticateToAWS()

  // gather assets
  let imageFiles = []
  if (options.single) imageFiles.push(options.single)
  if (options.batch) imageFiles = gatherAssets()

  // handle a batch or single upload to a specific version
  if (options.version) {
    const bucketPath = getS3BucketPathFromVersion(options.version)

    await checkForBucket(s3, program, bucketPath)

    const uploadMessage = options.single
      ? `Uploading ${options.single} to the ${bucketPath} S3 bucket for ${options.version}...\n`
      : `Uploading ${imageFiles.length} local assets to the ${bucketPath} S3 bucket for ${options.version}...\n`

    console.log(uploadMessage)

    imageFiles.forEach(file => {
      if (!options.dryRun) uploadFile(s3, bucketPath, file)
    })
  }

  // handle a single upload to all supported versions
  if (options.allVersions) {
    for (const version of supportedS3Versions) {
      const bucketPath = getS3BucketPathFromVersion(version)

      await checkForBucket(s3, program, bucketPath)

      console.log(`Uploading ${options.single} to the ${bucketPath} S3 bucket for ${version}...\n`)

      imageFiles.forEach(file => {
        if (!options.dryRun) uploadFile(s3, bucketPath, file)
      })
    }
  }

  console.log('Done!')
}

// check whether the version bucket exists (for single upload) or not (for batch upload)
async function checkForBucket (s3, program, bucketPath) {
  try {
    const params = {
      Prefix: bucketPath,
      Delimiter: '/',
      Bucket: 'github-images'
    }

    // if version dir exists, data.Prefix will be 'enterprise/<version>/assets/'
    const data = await s3.listObjects(params).promise()

    // bucket must already exist if uploading a single image
    if (options.single && !data.Prefix.includes(bucketPath)) {
      console.error(`Error! Bucket at ${bucketPath} does not exist yet.\n`)
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

// key path should look like enterprise/<version>/assets/images/foo/bar.png
function getKeyPath (bucketPath, file) {
  const basePath = file.replace(path.dirname(__dirname), '')
  return path.join(bucketPath, basePath)
}
