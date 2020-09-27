#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { chain, difference } = require('lodash')
const loadPages = require('../lib/pages')
const loadSiteData = require('../lib/site-data')
const renderContent = require('../lib/render-content')
const enterpriseServerReleases = require('../lib/enterprise-server-releases').supported
const patterns = require('../lib/patterns')
const authenticateToAWS = require('../lib/authenticate-to-aws.js')
const readlineSync = require('readline-sync')
const { execSync } = require('child_process')
const uploadScript = path.join(process.cwd(), 'script/upload-enterprise-images-to-s3.js')

// [start-readme]
//
// Run this script in your branch to check whether any images referenced in Enterprise content are
// not in the expected S3 bucket. You will need to authenticate to S3 via `awssume` to use this script.
// Instructions for the one-time setup are [here](https://github.com/github/product-documentation/blob/master/doc-team-workflows/workflow-information-for-all-writers/setting-up-awssume-and-s3cmd.md).
//
// [end-readme]

main()

async function main () {
  const s3 = await authenticateToAWS()

  console.log('Working...\n')
  const pages = await getEnglishPages()
  const siteData = await getEnglishSiteData()

  const s3References = []

  for (const version of enterpriseServerReleases) {
    for (const page of pages) {
      // skip page if it doesn't have a permalink for the current product version
      if (!page.permalinks.some(permalink => permalink.pageVersion === version)) continue

      // skip index pages because they do not contain images
      if (page.relativePath.endsWith('index.md')) continue

      // build fake context object for rendering the page
      page.version = version
      const context = {
        page,
        site: siteData
      }

      const rendered = await renderContent(page.markdown, context)
      const imageReferences = rendered.match(patterns.imagePath)

      if (!imageReferences) continue

      imageReferences.forEach(ref => {
        s3References.push(`enterprise/${version}${ref}`)
      })
    }
  }

  // store all images referenced in Enterprise content
  const s3ReferencesToCheck = chain(s3References).uniq().sort().value()

  console.log(`Found ${s3ReferencesToCheck.length} images referenced in Enterprise content in the current checkout.\n`)

  console.log('Checking the github-images S3 bucket...\n')

  const imagesOnS3 = []
  for (const version of enterpriseServerReleases) {
    const versionDirectory = `enterprise/${version}`
    imagesOnS3.push(await listObjects(s3, versionDirectory, imagesOnS3))
  }

  // store all found images on s3
  const allImagesOnS3 = chain(imagesOnS3).flatten().uniq().sort().value()

  const imagesMissingFromS3 = difference(s3ReferencesToCheck, allImagesOnS3)

  // return early if there are no missing images
  if (!imagesMissingFromS3.length) {
    console.log('All images are in S3 that should be!')
    return
  }

  console.log(`${imagesMissingFromS3.length} images are missing from S3:\n\n${imagesMissingFromS3.join('\n')}`)

  const prompt = `\nDo you want to try to upload these images to S3 from your local checkout?
\nPress Y to continue, or press enter any other key to cancel: `

  const answer = readlineSync.question(prompt)

  if (!answer.match(/^Y$/mi)) {
    console.log('Exiting!')
    process.exit()
  }

  console.log('Trying to upload...\n')
  imagesMissingFromS3.forEach(missingImage => {
    // s3 path: enterprise/2.19/assets/images/developer/graphql/insomnia-base-url-and-pat.png
    // local path: assets/images/developer/graphql/insomnia-base-url-and-pat.png
    const version = missingImage.split('/')[1]
    const localPath = missingImage.replace(`enterprise/${version}/`, '')
    const fullPath = path.join(process.cwd(), localPath)

    if (!fs.existsSync(fullPath)) {
      console.log(`cannot upload ${localPath}, file not found`)
      return
    }

    const result = execSync(`${uploadScript} --core --single ${localPath} ${version}`)
    console.log(result.toString())
  })

  console.log('Done uploading! Checking S3 again.')
  main()
}

async function getEnglishPages () {
  const pages = await loadPages()
  return pages.filter(page => page.languageCode === 'en')
}

async function getEnglishSiteData () {
  const siteData = await loadSiteData()
  return siteData.en.site
}

async function listObjects (s3, versionDirectory, imagesOnS3, token) {
  const params = {
    Bucket: 'github-images',
    StartAfter: versionDirectory
  }

  if (token) params.ContinuationToken = token

  const data = await s3.listObjectsV2(params).promise()

  const matchingKeys = data.Contents
    .map(obj => obj.Key)
    .filter(imageFile => imageFile.startsWith(versionDirectory))

  if (!matchingKeys.length) return []

  imagesOnS3.push(matchingKeys)

  if (data.IsTruncated) {
    await listObjects(s3, versionDirectory, imagesOnS3, data.NextContinuationToken)
  }

  return imagesOnS3
}
