import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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

  return (
    <div>
      <h3>Diccionario Colombiano</h3>

      {searchResult
        .slice()
        .sort((a, b) => a.word.localeCompare(b.word))
        .map((result) => {
          return (
            <div key={result.id}>
              <h5>
                <Link to={`/${result.word}`}>{result.word}</Link>
              </h5>
            </div>
          );
        })}
    </div>
  );
}
