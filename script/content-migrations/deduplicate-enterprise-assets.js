#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const jimp = require('jimp') // this is an optional dependency, install with `npm i --include=optional`

// iterate through enterprise images from most recent to oldest
// check if the image in the /assets/enterprise/... directory
// is an exact match to the assets/images in relative path and content
// if exact match, delete the /assets/enterprise/... version

const enterpriseAssetDirectories = [
  '/assets/enterprise/3.0',
  '/assets/enterprise/github-ae',
  '/assets/enterprise/2.22',
  '/assets/enterprise/2.21',
  '/assets/enterprise/2.20'
]

async function main () {
  for (const directory of enterpriseAssetDirectories) {
    const fullDirectoryPath = path.join(process.cwd(), directory)
    const files = walk(fullDirectoryPath, {
      includeBasePath: true,
      directories: false
    })

    for (const file of files) {
      // get the /assets/images file that currently exists, which
      // would be the equivalent to the enterprise asset
      const enterpriseRegex = /\/assets\/enterprise\/(2\.20|2\.21|2\.22|3\.0|github-ae)/
      const existingFileToCompare = file.replace(enterpriseRegex, '')
      const fileExt = path.extname(file)

      // if the file in the enterprise directory is an exact copy of
      // the image in the local /assets/images directory, then we can
      // delete the enterprise image and the reference in the Markdown
      // will just work
      if (fs.existsSync(existingFileToCompare)) {
        // Buffer.compare and Jimp both return 0 if files match
        let compareResult = 1
        try {
          // Jimp gives slightly better results comparing image files
          // over using a buffer compare. Of the assets we have,
          // Jimp only supports png and gif
          if (fileExt === '.png' || fileExt === '.gif') {
            const existingImageToCompare = await jimp.read(existingFileToCompare)
            const enterpriseImage = await jimp.read(file)
            // if the diff.percent value is 0, images are identical
            const diff = await jimp.diff(existingImageToCompare, enterpriseImage)
            compareResult = diff.percent
          } else {
            const existingImageToCompare = await fs.readFileSync(existingFileToCompare)
            const enterpriseImage = await fs.readFileSync(file)
            compareResult = Buffer.compare(Buffer.from(existingImageToCompare),
              Buffer.from(enterpriseImage))
          }
        } catch (err) {
          console.log(file)
          console.log(err)
        }
        if (compareResult === 0) fs.unlinkSync(file)
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done!'))
