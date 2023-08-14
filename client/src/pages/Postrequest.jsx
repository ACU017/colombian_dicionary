import { useState } from "react";
import Wordform from "../components/Wordform";
import Deleteword from "../components/Deleteword";

export default function Postrequest() {
  const [pageAdd, SetPageAdd] = useState(true);

  const handleClick = () => {
    if (pageAdd) {
      SetPageAdd(false);
      console.log("set add");
    } else if (!pageAdd) {
      SetPageAdd(true);
      console.log("set mod");
    }
  };
  return (
    <div>
      <div>
        {/*React didn't like the omit  */}
        <button onClick={!pageAdd ? () => handleClick() : null}>
          Add a word
        </button>
        <button onClick={pageAdd ? () => handleClick() : null}>
          Modify word
        </button>
      </div>

      {pageAdd ? (
        <div>
          <Wordform />
        </div>
      ) : (
        <div>
          <Deleteword />
        </div>
      )}
    </div>
  );
}
