import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Result() {
  const { word } = useParams();
  const [lookWord, SetLookWord] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Dictionary");
  };

  useEffect(() => {
    const searchWord = async () => {
      try {
        const response = await fetch(`/api/words/${word}`, {
          method: "GET",
        });

        const json = await response.json(); // should I transform everything into a small caps ?
        SetLookWord(json);
      } catch (error) {
        console.log("errorz");
      }
    };
    searchWord();
  }, []);

  return (
    <div>
      {lookWord.length === 0 ? (
        <div>
          <h3 onClick={handleClick}>Paila mi perro - try another word</h3>
        </div>
      ) : (
        lookWord
          .slice()
          .sort((a, b) => a.word.localeCompare(b.word))
          .map((result) => {
            return (
              <div className="d-flex  justify-content-center" key={result.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h4 className="card-title">{result.word}</h4>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {result.category}
                    </h6>
                    <h5>Definición:</h5>
                    <p className="card-text">{result.definition_es}</p>
                    <h5 className="card-text">Ejemplos : </h5>
                    <p>{result.example_1}</p>
                    <p>{result.example_2}</p>
                  </div>
                </div>
              </div>
            );
          })
      )}
      {/* <Wordform /> // */}
    </div>
  );
}
