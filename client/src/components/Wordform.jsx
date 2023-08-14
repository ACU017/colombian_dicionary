import React from "react";
import { useState, useEffect } from "react";

export default function Wordform() {
  const [notEmpty, SetNotEmpty] = useState(false);
  // states to build the body to the backend app in order to POST a new word
  const [request, SetRequest] = useState({
    word: "",
    category: "",
    definition_es: "",
    definition_en: "",
    example_1: "",
    example_2: "",
  });
  // function to check if request is empyt

  function isEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key]) SetNotEmpty(true);
      } else {
        SetNotEmpty(false);
      }
    }
    return console.log(notEmpty);
  }

  //handles changes and updates the state with the prevSate + {keyname:inputvalue}
  const handleChange = (event) => {
    SetRequest((prevRequest) => ({
      ...prevRequest,
      [event.target.name]: event.target.value,
    }));
  };

  // this functions handles the submit button cf button
  const handleSubmit = () => {
    isEmpty(request);
    if (!notEmpty) {
      postWord();
      alert("Yohoo you added a word");
    } else {
      alert("Pongase las pilas y ponga todas las palabras");
    }
    // here you perform the post
  };

  // this function does the POST into the DB
  const postWord = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      // getAllwords();
    } catch (error) {
      console.log("errorz");
    }
  };
  // Gets all words to show them in postman aka All the database
  // const getAllwords = async () => {
  //   try {
  //     const response = await fetch(`/api/words`, {
  //       method: "GET",
  //     });

  //     const json = await response.json();
  //     console.log(json);
  //   } catch (error) {
  //     console.log("errorz");
  //   }
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* here the button/enter handles the submit as does the fetch requuest */}
        <label>Qué palabra quieres definir ? </label>
        <input
          type="text"
          name="word" //=> event.target.name
          value={request.word} //=> event.target.value reactive date with the request State
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
        <label>Ahora en inglés - sin esta no se gradua mija: </label>
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
        <br></br>
        <button className="btn btn-outline-dark">Hagale!</button>
      </form>
    </div>
  );
}
