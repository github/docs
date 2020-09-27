const fs = require('fs')
const path = require('path')
const walk = require('walk-sync').entries
const validLayoutExtensions = ['.md', '.html']
const layoutsDirectory = path.join(__dirname, '../layouts')
const layouts = {}

walk(layoutsDirectory, { directories: false })
  .filter(entry => validLayoutExtensions.includes(path.extname(entry.relativePath)))
  .filter(entry => !entry.relativePath.includes('README'))
  .forEach(entry => {
    const key = path.basename(entry.relativePath).split('.').slice(0, -1).join('.')
    const fullPath = path.join(entry.basePath, entry.relativePath)
    const content = fs.readFileSync(fullPath, 'utf8')
    layouts[key] = content
  })

module.exports = layouts
