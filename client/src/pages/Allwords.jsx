import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from "../components/Result";

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

  // const handleChange = () => {
  //   SetResult(false);
  // };

  //Charges the DB so it shows all the words
  useEffect(() => {
    getAllwords();
    SetResult(false); // result to false so the conditional rendering works
  }, []);

  return (
    <div>
      <h3>Diccionario Colombiano</h3>
      {/* if result is true show Result , if not map trhough the DB and show the words */}
      {result === true ? (
        <Result handleResult={wordObject} />
      ) : (
        <div>
          {glossary
            .slice()
            .sort((a, b) => a.word.localeCompare(b.word))
            .map((result) => {
              return (
                <ul className="list-group" key={result.id}>
                  <li
                    className="list-group-item fs-3 m-1"
                    onClick={() => handleClick(result.word)}
                  >
                    {result.word}
                  </li>
                </ul>
              );
            })}
        </div>
      )}
    </div>
  );
}
