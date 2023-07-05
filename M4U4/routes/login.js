var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  var conocido = Boolean(req.session.nombre);
  res.render('login', {
    title: 'Ejercicio M4U4',
    conocido: conocido,
    nombre: req.session.nombre
  });

});

module.exports = router;
