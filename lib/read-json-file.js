import fs from 'fs'
import path from 'path'

export default function readJsonFile(xpath) {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), xpath), 'utf8'))
}
