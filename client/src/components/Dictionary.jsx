import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from "./Result";

function Dictionary() {
  const [searchInput, SetSearchInput] = useState("");
  const [searchResult, SetSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    SetSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // searchWord(searchInput);
    navigate(`/search/${searchInput}`);
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
    </div>
  );
}

export default Dictionary;
