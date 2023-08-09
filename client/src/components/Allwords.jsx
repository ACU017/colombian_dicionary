import { useEffect } from "react";
import { useState } from "react";

export default function Allwords() {
  const [searchResult, SetSearchResult] = useState([]);

  const getAllwords = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "GET",
      });

      const json = await response.json(); // should I transform everything into a small caps ?
      console.log(json);
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  useEffect(() => {
    getAllwords();
  }, []);

  return (
    <div>
      <h3>Diccionario Colombiano</h3>
      {searchResult.map((result) => {
        return (
          <div key={result.id}>
            <h5> Palabra : {result.word}</h5>
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
