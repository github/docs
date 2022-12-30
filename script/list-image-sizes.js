#!/usr/bin/env node

// [start-readme]
//
// This script lists all local image files, sorted by their dimensions.
//
// NOTE: If you get this error:
//
//    Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'image-size' ...
//
// it's because you haven't installed all the *optional* dependencies.
// To do that, run:
//
//    npm install --include=optional
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import walk from 'walk-sync'
import imageSize from 'image-size'
import { chain } from 'lodash-es'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const imagesPath = path.join(__dirname, '../assets/images')
const imagesExtensions = ['.jpg', '.jpeg', '.png', '.gif']

const images = chain(walk(imagesPath, { directories: false }))
  .filter((relativePath) => {
    return imagesExtensions.includes(path.extname(relativePath.toLowerCase()))
  })
  .map((relativePath) => {
    const fullPath = path.join(imagesPath, relativePath)
    const { width, height } = imageSize(fullPath)
    const size = width * height
    return { relativePath, width, height, size }
  })
  .orderBy('size', 'desc')
  .value()

images.forEach((image) => {
  const { relativePath, width, height } = image
  console.log(`${width} x ${height} - ${relativePath}`)
})
