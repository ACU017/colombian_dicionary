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
      SetGlossary(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  //find the word from the data base .json result
  // const findWord = (word) => {
  //   setWordObject(wordy);
  // };

  const handleClick = (word) => {
    navigate(`/search/${word}`);
    // findWord(word);
    SetResult(true);
  };

  const handleChange = () => {
    SetResult(false);
  };

  //Charges the
  useEffect((e) => {
    getAllwords();
    SetResult(false);
  }, []);

  return (
    <div>
      <h3 onClick={handleChange}>Diccionario Colombiano</h3>

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
