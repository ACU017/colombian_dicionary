import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Allwords() {
  const [searchResult, SetSearchResult] = useState([]);

  const getAllwords = async () => {
    try {
      const response = await fetch(`/api/words`, {
        method: "GET",
      });

      const json = await response.json(); // should I transform everything into a small caps ?
      console.log(json);
      SetSearchResult(json);
    } catch (error) {
      console.log("errorz");
    }
  };

  useEffect(() => {
    getAllwords();
  }, []);

  const sortedWords = searchResult
    .slice()
    .sort((a, b) => a.searchResult.localeCompare(b.searchResult));

  return (
    <div>
      <h3>Diccionario Colombiano</h3>
      {searchResult.map((result) => {
        return (
          <div key={result.id}>
            <h5>
              <Link to={`Dictionary/${result.word}`}>{result.word}</Link>
            </h5>
          </div>
        );
      })}
    </div>
  );
}
