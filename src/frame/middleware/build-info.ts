import type { Request, Response } from 'express'

import { noCacheControl } from './cache-control'

const BUILD_SHA = process.env.BUILD_SHA

export default function buildInfo(req: Request, res: Response) {
  res.type('text/plain')
  noCacheControl(res)
  if (!BUILD_SHA) {
    res.status(404).send('Not known')
    return
  }
  res.send(`${BUILD_SHA}`)
}
