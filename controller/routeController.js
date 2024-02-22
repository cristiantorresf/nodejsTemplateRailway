const express = require('express')
// commonjs
const router = express.Router()
router.get('/testing', (req, res) => {
    res.send('this is a webhook')
})
module.exports = router
