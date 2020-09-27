const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200)
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })
  res.send(`<meta name="csrf-token" content="${req.context.csrfToken}" />`)
})

module.exports = router
