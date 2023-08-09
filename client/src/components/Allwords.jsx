import React from "react";

export default async function Allwords() {
  const [searchResult, SetSearchResult] = useState([]);
  try {
    const response = await fetch(`/api/words`, {
      method: "GET",
    });

    const json = await response.json(); // should I transform everything into a small caps ?
    SetSearchResult(json);
  } catch (error) {
    console.log("errorz");
  }

  return <div></div>;
}
