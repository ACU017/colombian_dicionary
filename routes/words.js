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

// ADMIN RIGHTS

// To add = check if the word already exists
router.post("/", async function (req, res, next) {
  const { word, category, definition_es, definition_en, example_1, example_2 } =
    req.body;

  try {
    // const checker = await db(
    //   `SELECT * FROM words WHERE word LIKE '%${word}%';`
    // );
    // if (checker.data.length) {
    //   res.send("Your word already exist"); // you don't need an else this line is returning
    // }
    await db(
      `INSERT INTO words (word, category, definition_es, definition_en, example_1, example_2) VALUES (${word},${category},${definition_es},${definition_en},${example_1},${example_2});`
    );
    getAllItems(req, res);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/*PUT request => as of now has to have all the params as the DB only take null for example_2
so to update any element you have to send the whole element with all the body key cf bellow
the idea would be to make this into a single SQL line

UPDATE words SET keyname= 'obj.value' WHERE id= obj.id ;
*/
router.put("/", async function (req, res, next) {
  const {
    id,
    word,
    category,
    definition_es,
    definition_en,
    example_1,
    example_2,
  } = req.body;

  try {
    await db(
      // for reference here is the DB request in MySQL
      `UPDATE words SET word="${word}", category="${category}", definition_es="${definition_es}", definition_en="${definition_en}", example_1="${example_1}", example_2 ="${example_2}"  WHERE id=${id};`
    );
    getAllItems(req, res);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/*RED BUTTON delete from the database
I really don't want to use this because I want to protect the database

router.delete("/", async function (req, res, next) {
  const {
    id,
    word,
    category,
    definition_es,
    definition_en,
    example_1,
    example_2,
  } = req.body;

  try {
    await db(
      // for reference here is the DB request in MySQL
      `NOT DONE YET -- HERE IS TEH SQL COMMAND ;`
    );
    getAllItems(req, res);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
*/

module.exports = router;
