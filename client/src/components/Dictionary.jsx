import React, { useState } from "react";

function Dictionary({ searchResult }) {
  const [word, setWord] = useState("");

  const [category, setCategory] = useState("");
  const [definitionEs, setDefinitionEs] = useState("");
  const [definitionEn, setDefinitionEn] = useState("");
  const [example1, setExample1] = useState("");
  const [example2, setExample2] = useState("");

  return (
    <div>
      {searchResult.length && (
        <div>
          <h5>Word : {searchResult[0].word} </h5>
          <p>
            Function: <i>{searchResult[0].category}</i>
          </p>
          <p>Definition: {searchResult[0].definition_es}</p>
          <p>
            Examples: {searchResult[0].example_1} {searchResult[0].example_2}
          </p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
