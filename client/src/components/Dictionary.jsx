import React, { useState } from "react";

function Dictionary({ searchResult }) {
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
            Examples:<p>{searchResult[0].example_1}</p>
            <p>{searchResult[0].example_2}</p>
          </p>
        </div>
      )}
    </div>
  );
}

export default Dictionary;
