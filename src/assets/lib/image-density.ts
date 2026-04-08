import fs from 'fs'

interface ImageDensityMap {
  [path: string]: string
}

const file = fs.readFileSync('./src/assets/lib/image-density.txt', 'utf8')

export const IMAGE_DENSITY: ImageDensityMap = Object.fromEntries(
  file.split('\n').map((line) => {
    const [path, density] = line.split(' ')
    return [path, density]
  }),
)
