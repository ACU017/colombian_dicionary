import React from "react";

export default function Result({ handleResult }) {
  return (
    <div>
      {handleResult.length === 0
        ? ""
        : handleResult
            .slice()
            .sort((a, b) => a.word.localeCompare(b.word))
            .map((result) => {
              return (
                <div key={result.id}>
                  <h5> {result.word}</h5>
                  <p>
                    Categoría: <i>{result.category}</i>
                  </p>
                  <p> Definición : {result.definition_es}</p>
                  <p> Ejemplos : {result.example_1}</p>
                  <p>{result.example_2}</p>
                </div>
              );
            })}
    </div>
  );
}
