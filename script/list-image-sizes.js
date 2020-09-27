#!/usr/bin/env node

const path = require('path')
const walk = require('walk-sync')
const imageSize = require('image-size')
const { chain } = require('lodash')
const imagesPath = path.join(__dirname, '../assets/images')
const imagesExtensions = ['.jpg', '.jpeg', '.png', '.gif']

// [start-readme]
//
// This script lists all local image files, sorted by their dimensions.
//
// [end-readme]

const images = chain(walk(imagesPath, { directories: false }))
  .filter(relativePath => {
    return imagesExtensions.includes(path.extname(relativePath.toLowerCase()))
  })
  .map(relativePath => {
    const fullPath = path.join(imagesPath, relativePath)
    const { width, height } = imageSize(fullPath)
    const size = width * height
    return { relativePath, width, height, size }
  })
  .orderBy('size', 'desc')
  .value()

images.forEach(image => {
  const { relativePath, width, height } = image
  console.log(`${width} x ${height} - ${relativePath}`)
})
