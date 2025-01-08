import type { Request, Response } from 'express'

import { noCacheControl } from './cache-control.js'

export default function remoteIp(req: Request, res: Response) {
  noCacheControl(res)
  res.json({
    ip: req.ip,
    'x-forwarded-for': req.headers['x-forwarded-for'] || null,
    'x-forwarded-host': req.headers['x-forwarded-host'] || null,
    host: req.headers['host'] || null,
    'fastly-client-ip': req.headers['fastly-client-ip'] || null,
  })
}

/*
Note from previous author:
This is used to check that the WAF is working correctly.
Doing things such as IP blocking in the Azure Firewall.
To make sure we got the Fastly -> Azure FrontDoor -> Azure App service header stuff right.
For example, if you use the express IP rate limit thing,
you want to make sure it's using the end user's IP and not the Fastly POP node.
So it was to end-to-end test the config by comparing that URL
with this https://www.google.com/search?q=what+is+my+ip
*/
