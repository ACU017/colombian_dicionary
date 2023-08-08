var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM words;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/:word", function (req, res, next) {
  const { word } = req.params;

  db(`SELECT * FROM words WHERE word LIKE '%${word}%';`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/words/query/:query", function (req, res, next) {
  const { query } = req.params;

  db(`SELECT * FROM words WHERE word LIKE '%${query}%';`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
