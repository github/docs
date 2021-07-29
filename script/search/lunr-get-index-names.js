#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import xFs from 'fs'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fs = xFs.promises

export default async function getIndexNames() {
  const indexList = await fs.readdir(path.join(__dirname, '../../lib/search/indexes'))
  return indexList
    .sort()
    .filter((index) => !index.includes('records'))
    .map((index) => index.replace('.json.br', ''))
}
