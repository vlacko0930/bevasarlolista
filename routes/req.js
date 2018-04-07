var express  = require('express')
var mongoose = require('mongoose')
var router   = express.Router()
mongoose.connect('mongodb://localhost/test')

const BLista = mongoose.model('SHList', {
  datum: { type: Date, default: Date.now },
  lista: []
 })

//      ->  /req/

router.get('/', (req, res, next) => res.send('Root query'))
router.post('/blment',(req, res, next) => {
  const listaMenteni = new BLista({lista:req.body.bl})
  listaMenteni.save().then(() => console.log('meow'))

  res.send('megjött: '+req.body.bl[0])

})
module.exports = router
