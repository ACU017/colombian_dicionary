import { useState } from "react";

import "./App.css";
import Dictionary from "./components/Dictionary";
import Wordform from "./components/Wordform";

function App() {
  const [searchInput, SetSearchInput] = useState("");
  const [searchResult, SetSearchResult] = useState([]);

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
      console.log(typeof json);
      console.log(json[0].word);
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  return (
    <>
      <div>
        <nav className="navbar">
          <p>Dictionary</p> <p>Glossary</p>
        </nav>
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
        <div className="container" name="dictionary">
          {console.log(searchResult)}
          <Dictionary searchResult={searchResult} />
          <Wordform />
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
