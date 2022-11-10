const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express()

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router