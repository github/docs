import fs from 'fs/promises'
import path from 'path'
import { load } from 'js-yaml'
import type { SecretScanningData } from '@/types'

const cache = new Map<string, SecretScanningData[]>()

export async function getSecretScanningData(filepath: string): Promise<SecretScanningData[]> {
  const key = path.resolve(filepath)
  if (cache.has(key)) return structuredClone(cache.get(key)!)

  const raw = await fs.readFile(key, 'utf-8')
  const data = (load(raw) as SecretScanningData[]) ?? []
  cache.set(key, data)
  return structuredClone(data)
}
