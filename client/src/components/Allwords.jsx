import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from "./Result";
//Imports from Material UI

export default function Allwords() {
  const [glossary, SetGlossary] = useState([]);
  const [result, SetResult] = useState(false);
  const [wordObject, setWordObject] = useState({});
  const navigate = useNavigate();

  // Gets all the words from the DB to set glossary state
  const getAllwords = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "GET",
      });

      const json = await response.json();
      //puts the DB into a state
      SetGlossary(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  // the word here is {result.word} that is the word you click
  const handleClick = (word) => {
    navigate(`/search/${word}`); // here is the link to Result page
    SetResult(true);
  };

  const handleChange = () => {
    SetResult(false);
  };

  //Charges the DB so it shows all the words
  useEffect((e) => {
    getAllwords();
    SetResult(false); // result to false so the conditional rendering works
  }, []);

  return (
    <div>
      <h3 onClick={handleChange}>Diccionario Colombiano</h3>
      {/* if result is true show Result , if not map trhough the DB and show the words */}
      {result === true ? (
        <Result handleResult={wordObject} />
      ) : (
        glossary
          .slice()
          .sort((a, b) => a.word.localeCompare(b.word))
          .map((result) => {
            return (
              <div key={result.id}>
                <p onClick={() => handleClick(result.word)}>{result.word}</p>
              </div>
            );
          })
      )}
    </div>
  );
}
