const fs = require('fs')
const path = require('path')
const homedir = require('os').homedir()
const awsCredsPath = path.join(homedir, '/.aws/credentials')
const s3ConfigPath = path.join(homedir, '.s3cfg')

// check for config files
if (!(fs.existsSync(awsCredsPath) || fs.existsSync(s3ConfigPath))) {
  console.error('You need to set up awssume and s3cmd. Follow the steps at https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/setting-up-awssume-and-s3cmd.md')
  process.exit(1)
}

// read config files
const awsCreds = fs.readFileSync(awsCredsPath, 'utf8')
const s3configContents = fs.readFileSync(s3ConfigPath, 'utf8')

// get values from AWS creds file
const accessKey = getCred('aws_access_key_id')
const secretKey = getCred('aws_secret_access_key')
const accessToken = getCred('aws_session_token')

// need to set AWS_PROFILE env var before loading SDK
// see https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
process.env.AWS_PROFILE = 's3-github-images'
const AWS = require('aws-sdk')

module.exports = async function s3 () {
  const s3 = new AWS.S3()
  const buckets = await listBuckets(s3)
  updateS3Creds()
  try {
    const bucket = buckets.Buckets.find(bucket => bucket.Name === 'github-images')
    if (bucket) return s3
  } catch (e) {
    console.error(`Could not find 'github-images' bucket: ${e.message}`)
  }
}

// connect to S3 to confirm we can access the github-images bucket
async function listBuckets (s3) {
  try {
    const params = {}
    const data = await s3.listBuckets(params).promise()
    return data
  } catch (e) {
    if (e.code === 'ExpiredToken') {
      console.error(`${e.message} Generate new temporary creds with this command:\n\n$ awssume --profile s3-github-images`)
    } else {
      console.error(`Could not get buckets: ${e.message}`)
    }
    process.exit(1)
  }
}

// update file at ~/.s3cfg
function updateS3Creds () {
  let newS3configContents

  if (!(s3configContents.includes(accessKey) && s3configContents.includes(secretKey) && s3configContents.includes(accessToken))) {
    console.log('Updating your s3config file with your temporary AWS creds...\n')
    newS3configContents = s3configContents

    newS3configContents = updateCred('access_key', accessKey, newS3configContents)
    newS3configContents = updateCred('secret_key', secretKey, newS3configContents)
    newS3configContents = updateCred('access_token', accessToken, newS3configContents)

    fs.writeFileSync(s3ConfigPath, newS3configContents)
  }
}

// read credentials from ~/.aws/credentials
function getCred (cred) {
  const regex = new RegExp(`${cred} = (.*?)$`, 'm')
  return awsCreds.match(regex)[1]
}

// update credentials in ~/.s3cfg
function updateCred (s3Key, awsValue, newS3configContents) {
  const regex = new RegExp(`${s3Key} = .*?$`, 'm')
  return newS3configContents.replace(regex, `${s3Key} = ${awsValue}`)
}
