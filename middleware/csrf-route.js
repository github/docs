const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200)
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })
  res.json({ token: req.csrfToken() })
})

module.exports = router
