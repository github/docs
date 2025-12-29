import type { Request, Response } from 'express'

import { noCacheControl } from './cache-control'

export default function reqHeaders(req: Request, res: Response) {
  noCacheControl(res)
  res.json({
    'request-headers': req.headers,
  })
}
