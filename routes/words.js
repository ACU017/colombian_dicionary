var express = require("express");
var router = express.Router();
const db = require("../model/helper");

const getAllItems = async (req, res) => {
  try {
    const results = await db("SELECT * FROM words ORDER BY id ASC;");
    res.send(results.data);
  } catch {
    res.status(500).send(err);
  }
};

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

router.post("/post_word", async function (req, res, next) {
  const { word, category, definition_es, definition_en, example_1, example_2 } =
    req.body;

  try {
    await db(
      `INSERT INTO words (word, category, definition_es, definition_en, example_1, example_2) VALUES ("${word}","${category}","${definition_es}","${definition_en}","${example_1}","${example_2}");`
    );
    getAllItems(req, res);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// router.get("/words/query/:query", function (req, res, next) {
//   const { query } = req.params;

//   db(`SELECT * FROM words WHERE word LIKE '%${query}%';`)
//     .then((results) => {
//       res.send(results.data[0]);
//     })
//     .catch((err) => res.status(500).send(err));
// });

module.exports = router;
