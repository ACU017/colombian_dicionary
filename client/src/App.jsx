import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Wordform from "./components/Wordform";
import Allwords from "./components/Allwords";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <div>
        <nav className="navbar">
          <p>
            <Link to="">Home</Link>
          </p>
          <p>
            <Link to="Dictionary">Dictionary</Link>
          </p>
          <p>
            <Link to="Allwords">Glossary</Link>
          </p>
        </nav>
        <h1>Colombian Dictionary</h1>
        <div></div>
        <div className="container" name="dictionary"></div>
      </div>
      <Routes>
        <Route path="/Dictionary" element={<Dictionary />} />
        <Route path="/Searchbar/:word" element={<Searchbar />} />
        <Route path="/Wordform" element={<Wordform />} />
        <Route path="/Allwords" element={<Allwords />} />
      </Routes>
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
