var express = require('express');
var router = express.Router();
var session = require('express-session');



router.get('/', function (req, res,next) {
  var conocido = Boolean(req.session.nombre);
  res.render('auth', {
    title: 'Ejercicio M4U4',
    conocido: conocido,
    nombre: req.session.nombre
  });

});



router.post('/', function (req, res) {


  if (req.body.nombre) {

    req.session.nombre = req.body.nombre;
  }
  res.redirect('/auth');


});




module.exports = router;