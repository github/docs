import express from 'express'

import octicons from '@primer/octicons'

import { defaultCacheControl } from './cache-control.js'

const router = express.Router()

const SVG_CONTENT_TYPE = 'image/svg+xml'

// Returns a client side redirect if one exists for the given path.
router.get('/react/:name', function productIcons(req, res) {
  let { name } = req.params
  if (name.endsWith('.svg')) {
    name = name.replace(/\.svg$/, '')
  }
  // If the name is `FooBarIcon`, as a key in `octicons` it becomes
  // `foo-bar`. The `Icon` is dropped and the capitalization is replaced with
  // hyphens.
  const asOcticonName = name
    .replace(/Icon$/, '')
    .replaceAll(/[a-z]([A-Z])/g, (whole, firstLetter) => {
      return whole.replace(firstLetter, `-${firstLetter.toLowerCase()}`)
    })
    .toLowerCase()

  // To avoid a "object injection attack", don't just use the square
  // bracket. E.g. `someObject['constructor']` is truthy even
  // when `const someObject = {foo: "bar"}`.
  if (!Object.prototype.hasOwnProperty.call(octicons, asOcticonName)) {
    return res.status(404).send('not found')
  }
  const asIcon = octicons[asOcticonName]
  const asSVG = asIcon.toSVG({
    xmlns: 'http://www.w3.org/2000/svg',
  })

  defaultCacheControl(res)
  res.set('content-type', SVG_CONTENT_TYPE)
  res.status(200).send(Buffer.from(asSVG.trim()))
})

export default router
