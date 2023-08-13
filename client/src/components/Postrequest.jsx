import React from "react";
import Wordform from "./Wordform";
import Deleteword from "./Deleteword";

export default function Postrequest() {
  return (
    <div>
      <div>
        <Wordform />
      </div>

      <div>
        <Deleteword />
      </div>
    </div>
  );
}
