var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send([{
    name:"Paul",
    age:20,
    sport:"Football"
},{
    name:"Cindy",
    age:20,
    sport:"Basketball"
}]);
});

module.exports = router;
