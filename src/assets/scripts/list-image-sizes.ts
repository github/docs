// [start-readme]
//
// This script lists all local image files, sorted by their dimensions.
//
// [end-readme]

import { fileURLToPath } from 'url'
import path from 'path'
import walk from 'walk-sync'
import sharp from 'sharp'
import { createLogger } from '@/observability/logger'
import { toError } from '@/observability/lib/to-error'

const logger = createLogger(import.meta.url)

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const imagesPath = path.join(__dirname, '../../../assets/images')
const imagesExtensions = ['.jpg', '.jpeg', '.png', '.gif']

const files = walk(imagesPath, { directories: false }).filter((relativePath) => {
  return imagesExtensions.includes(path.extname(relativePath.toLowerCase()))
})

logger.info('Starting image scan', { path: imagesPath, totalFiles: files.length })

const images = await Promise.all(
  files.map(async (relativePath) => {
    const fullPath = path.join(imagesPath, relativePath)
    try {
      const image = sharp(fullPath)
      const { width, height } = await image.metadata()
      const size = (width || 0) * (height || 0)
      return { relativePath, width, height, size }
    } catch (error) {
      logger.warn('Failed to read image metadata', toError(error), { relativePath })
      return { relativePath, width: 0, height: 0, size: 0 }
    }
  }),
)

const sorted = images.sort((a, b) => b.size - a.size)
for (const image of sorted) {
  const { relativePath, width, height } = image
  logger.info(`${width} x ${height} - ${relativePath}`)
}

logger.info('Image scan complete', { totalImages: sorted.length })
