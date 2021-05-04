var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/list_all_foods', function (req, res, next) {
  res.end("GET request")
});

router.post('/insert_new_food', function (req, res, next) {
  res.end("POST new food")
});

router.put('/update_a_food', function (req, res, next) {
  res.end("UPDATE new food")
});

router.delete('/delete_a_food', function (req, res, next) {
  res.end("DELETE new food")
});

module.exports = router;
