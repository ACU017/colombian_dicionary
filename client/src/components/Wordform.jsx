import React from "react";
import { useState } from "react";

export default function Wordform() {
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("");
  const [definitionEs, setDefinitionEs] = useState("");
  const [definitionEn, setDefinitionEn] = useState("");
  const [example1, setExample1] = useState("");
  const [example2, setExample2] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("I'm working");
    setWord(e.target.value);
  };

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
        <input />
        <label>Porfavor define la palabra : </label>
        <textarea></textarea>
        <label>Ahora en inglés : </label>
        <textarea></textarea>
        <label>Aquí va un ejemplo : </label>
        <textarea></textarea>
        <label>Y si quiere otro sumercé : </label>
        <textarea></textarea>
        <button>Hagale!</button>
      </form>
    </div>
  );
}
