#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs/promises'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default async function getIndexNames() {
  const indexList = await fs.readdir(path.join(__dirname, '../../lib/search/indexes'))
  return indexList
    .sort()
    .filter((index) => !index.includes('records'))
    .map((index) => index.replace('.json.br', ''))
}
