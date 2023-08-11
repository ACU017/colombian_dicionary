import React from "react";
import { useState, useEffect } from "react";
//Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Wordform() {
  // request to send to the backend app in order to POST a new word
  const [request, SetRequest] = useState({
    word: "",
    category: "",
    definition_es: "",
    definition_en: "",
    example_1: "",
    example_2: "",
  });

  //handles changes and updates the state with the prevSate + {keyname:inputvalue}
  const handleChange = (event) => {
    SetRequest((prevRequest) => ({
      ...prevRequest,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    // here you perform the post
    postWord();
  };

  const postWord = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      // const json = await response.json(); // should I transform everything into a small caps ?
      getAllwords();
      console.log("I posted");
    } catch (error) {
      console.log("errorz");
    }
  };
  const getAllwords = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "GET",
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Qué palabra quieres definir ? </label>
        <input
          type="text"
          name="word"
          value={request.word}
          onChange={handleChange}
        />
        <label>Que categoria es ? </label> {/* dropdown menu*/}
        <input
          type="text"
          name="category"
          value={request.category}
          onChange={handleChange}
        />
        <label>Porfavor define la palabra : </label>
        <textarea
          name="definition_es"
          value={request.definition_es}
          onChange={handleChange}
        ></textarea>
        <label>Ahora en inglés - sin esta no se gradúa mija: </label>
        <textarea
          name="definition_en"
          value={request.definition_en}
          onChange={handleChange}
        ></textarea>
        <label>Aquí va un ejemplo : </label>
        <textarea
          name="example_1"
          value={request.example_1}
          onChange={handleChange}
        ></textarea>
        <label>Y si quiere otro sumercé : </label>
        <textarea
          name="example_2"
          value={request.example_2}
          onChange={handleChange}
        ></textarea>
        <button>Hagale!</button>
      </form>
    </div>
  );
}
