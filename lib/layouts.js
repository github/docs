import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import xWalkSync from 'walk-sync'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const walk = xWalkSync.entries
const validLayoutExtensions = ['.md', '.html']
const layoutsDirectory = path.join(__dirname, '../layouts')
const layouts = {}

walk(layoutsDirectory, { directories: false })
  .filter((entry) => validLayoutExtensions.includes(path.extname(entry.relativePath)))
  .filter((entry) => !entry.relativePath.includes('README'))
  .forEach((entry) => {
    const key = path.basename(entry.relativePath).split('.').slice(0, -1).join('.')
    const fullPath = path.join(entry.basePath, entry.relativePath)
    const content = fs.readFileSync(fullPath, 'utf8')
    layouts[key] = content
  })

export default layouts
