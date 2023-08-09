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

// ADMIN RIGHTS
/*
router.put("/todos/:todo_id", async (req, res) => {
  // URL params are available in req.params
  const id = +req.params.todo_id;
  try {
    await db(`UPDATE items SET complete = !complete WHERE id =${id};`);
    getAllItems(req, res);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
*/

module.exports = router;
