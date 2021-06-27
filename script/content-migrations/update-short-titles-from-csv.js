#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const readFrontmatter = require('../../lib/read-frontmatter')
const csv = require('csv-parse')
const { exit } = require('process')

main()

async function main() {
  let fileCounter = 0
  let csvHeader = []
  const csvFileName = 'shortTitles.csv'
  const filePath = path.join(process.cwd(), csvFileName)
  const reader = fs.createReadStream(filePath)
  
  // Parse each row of the csv
  reader
    .pipe(csv())
    .on('data', (csvData) => {
      if (csvHeader.length === 0) {
        csvHeader = verifyHeader(csvData)
      } else {
        if (csvData[3] && csvData[4]) {
          updateFrontmatter(csvData)
          fileCounter++
        }
      }
    })
    .on('end', () => {
      console.log(`⭐ Completed updating the shortTitle frontmatter.\nUpdated ${fileCounter} files.`)
    })
}

async function updateFrontmatter(csvData) {

  const filePath = path.join(process.cwd(), csvData[4])
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, data } = readFrontmatter(fileContent)
  data.shortTitle = csvData[3] 
  const newContents = readFrontmatter.stringify(content, data, { lineWidth: 10000 })
  fs.writeFileSync(filePath, newContents)
  
}

// Ensure the columns being read out are in the location expected 
async function verifyHeader(csvData) {

  const csvHeader = []

  csvData.forEach(element => {
    csvHeader.push(element)
  })

  if (csvHeader[3] !== 'Short title') {
    console.log(`The CSV headers are malformed. Expected to see column 3 contain the header 'Short title'`)
    exit(1)
  }
  if (csvHeader[4] !== 'Relative path') {
    console.log(`The CSV headers are malformed. Expected to see column 4 contain the header 'Relative path'`)
    exit(1)
  }

  return csvHeader
}