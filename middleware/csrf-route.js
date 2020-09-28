const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200)
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })
<<<<<<< HEAD
  res.send(`<meta name="csrf-token" content="${req.context.csrfToken}" />`)
=======
  res.json({ token: req.csrfToken() })
>>>>>>> origin/main
})

module.exports = router
