// import { useState } from "react";
import React from "react";

function Dictionary({ searchResult }) {
  //   if (!Array.isArray(searchResult)) {
  //     console.log(searchResult);
  //     return <p>Nada parce.</p>;
  //   }

  return (
    <div>
      {searchResult.length && (
        <div>
          <h5>Word : {searchResult[0].word} </h5>
          <p>
            Function: <i>{searchResult[0].function}</i>
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
