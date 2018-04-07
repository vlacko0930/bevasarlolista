var express = require('express')
var router = express.Router()

router.get( '/', (req, res, next) => res.render('index') )

router.get( '/menu', (req, res, next) => res.render('menu') )

module.exports = router
