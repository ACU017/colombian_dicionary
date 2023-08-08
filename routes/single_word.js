var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/:word", function (req, res, next) {
  const word = req.params.word;

  const query = "SELECT * FROM words WHERE word = ?";

  db(query, [word])
    .then((results) => {
      res.send(results);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
