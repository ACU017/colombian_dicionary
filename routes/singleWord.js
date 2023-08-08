var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/:word", function (req, res, next) {
  let word = req.params.word;
  db(`SELECT * FROM words WHERE word = "${word}";`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
