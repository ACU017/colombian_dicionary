import React from "react";
import { useState, useEffect } from "react";
//Material UI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Wordform() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [definitionEs, setDefinitionEs] = useState("");
  const [definitionEn, setDefinitionEn] = useState("");
  const [example1, setExample1] = useState("");
  const [example2, setExample2] = useState("");
  const [request, SetRequest] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I'm working");
    SetRequest((request.word = word));
    SetRequest((request.category = category));
    SetRequest((request.definition_es = definitionEs));
    // request.definition_en = definitionEn;
    // request.example_1 = example1;
    // request.example2 = example2;
    console.log(request);
  };

  const postWord = async () => {
    try {
      const response = await fetch(`/api/words/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      const json = await response.json(); // should I transform everything into a small caps ?
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  useEffect((handleSubmit) => {}, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Qué palabra quieres definir ? </label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <label>Que categoria es ? </label> {/* dropdown menu*/}
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Porfavor define la palabra : </label>
        <textarea
          value={definitionEs}
          onChange={(e) => setDefinitionEs(e.target.value)}
        ></textarea>
        <label>Ahora en inglés : </label>
        <textarea
          value={definitionEn}
          onChange={(e) => setDefinitionEn(e.target.value)}
        ></textarea>
        <label>Aquí va un ejemplo : </label>
        <textarea
          value={example1}
          onChange={(e) => setExample1(e.target.value)}
        ></textarea>
        <label>Y si quiere otro sumercé : </label>
        <textarea
          value={example2}
          onChange={(e) => setExample2(e.target.value)}
        ></textarea>
        <button>Hagale!</button>
      </form>
    </div>
  );
}
