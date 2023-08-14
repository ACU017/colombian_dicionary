import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dictionary() {
  const [searchInput, SetSearchInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    SetSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput === "") {
      navigate(`/Dictionary`);
    } else {
      navigate(`/search/${searchInput}`);
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
        <br></br>
        <button type="submit" className="btn btn-outline-dark ">
          Dele
        </button>
      </form>
    </div>
  );
}

export default Dictionary;
