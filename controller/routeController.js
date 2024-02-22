const express = require('express')
// commonjs
const router = express.Router()
router.get('/testing', (req, res) => {
    const {CLIENT_ID, CLIENT_SECRET, TENANT_ID} = process.env
    res.send('this is a webhook')
})
module.exports = router
