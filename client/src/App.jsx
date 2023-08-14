import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dictionary from "./pages/Dictionary";
import Wordform from "./components/Wordform";
import Allwords from "./pages/Allwords";
import Postrequest from "./pages/Postrequest";
import Result from "./components/Result";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <nav className="navbar">
          <Link to="/Home">Home</Link>

          <Link to="Dictionary">Dictionary</Link>

          <Link to="Allwords">Glossary</Link>

          <Link to="Postrequest">Add your word</Link>
        </nav>
        <h1>Colombian Dictionary</h1>
        <div></div>
        <div className="container" name="dictionary"></div>
      </div>
      <Routes>
        <Route path="/Dictionary" element={<Dictionary />} />
        <Route path="/Wordform" element={<Wordform />} />
        <Route path="/Allwords" element={<Allwords />} />
        <Route path="/search/:word" element={<Result />} />
        <Route path="/Postrequest" element={<Postrequest />} />
        <Route path="/Home" element={<Home />} />
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

Edit <code>src/App.jsx</code> and save to test HMR

</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more

</>
*/
