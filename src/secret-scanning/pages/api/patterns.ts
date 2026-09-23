import type { NextApiRequest, NextApiResponse } from 'next'
import { getSecretScanningData } from '@/secret-scanning/lib/get-secret-scanning-data'
import path from 'path'

// Returns the cached pattern data as JSON. No HTML rendering here.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const version = (req.query.version as string) || 'fpt'
  const filepath = path.join(
    process.cwd(),
    'src/secret-scanning/data/pattern-docs',
    version,
    'public-docs.yml',
  )

  try {
    const data = await getSecretScanningData(filepath)
    // The data only changes on deploy, so cache hard.
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    res.json(data)
  } catch {
    res.status(404).json({ error: 'Version not found' })
  }
}
