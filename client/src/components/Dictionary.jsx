import React, { useState } from "react";

function Dictionary() {
  const [searchResult, SetSearchResult] = useState([]);
  const [searchInput, SetSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    SetSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchWord(searchInput);
  };
  const searchWord = async () => {
    try {
      const response = await fetch(`/api/words/${searchInput}`, {
        method: "GET",
      });

      const json = await response.json(); // should I transform everything into a small caps ?
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque aquí "
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Dele</button>
      </form>
      {searchResult.length &&
        searchResult.map((result) => {
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

export default Dictionary;
