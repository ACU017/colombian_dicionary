var express = require("express");
var router = express.Router();
const db = require("../model/helper");

/* GET home page. */
// router.get("/:word", async function (req, res, next) {
//   const { word } = req.params;

//   try {
//     const results = await db(`SELECT * FROM words WHERE word = "${word}" ;`);
//     console.log(results);
//     res.send(results.data[0]);

//     // if (results.length > 0) {
//     //   res.send(results);
//     // } else {
//     //   res.status(404).send("Word not found");
//     // }
//   } catch (error) {
//     console.log(error);
//     // res.status(500).send("Interval Server error");
//   }
// });

// router.get("/:word", function (req, res, next) {
//   const { word } = req.params;

//   db(`SELECT * FROM words WHERE word = "${word}" ;`)
//     .then((results) => {
//       res.send(results.data[0]);
//     })
//     .catch((err) => res.status(500).send(err));
// });

module.exports = router;
