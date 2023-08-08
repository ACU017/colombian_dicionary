import { useState } from "react";

import "./App.css";

function App() {
  const [searchInput, SetSearchInput] = useState("");
  const [searchResult, SetSearchResult] = useState("");

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
      console.log(json);
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  return (
    <>
      <div>
        <h1>Colombian Dictionary</h1>
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
        </div>
        <div className="container">
          <p>Word: {searchResult[0].word}</p>
          <p>function: {searchResult[0].function} </p>
          <p>Definition : {searchResult[0].definition_es}</p>
          <p>Examples : {searchResult[0].example_1}</p>
        </div>
      </div>
    </>
  );
}

export default App;

/*
Former app structure 

   <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
    */
