import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const read = function () {
  const filename = path.join(__dirname, '../../crowdin.yml')
  return yaml.load(fs.readFileSync(filename, 'utf8'), { filename })
}

export default { read }
