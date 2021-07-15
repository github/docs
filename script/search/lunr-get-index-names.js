#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import xFs from 'fs'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const fs = xFs.promises

export default async function getIndexNames() {
  return await fs.readdir(path.join(__dirname, '../../lib/search/indexes'))
}
