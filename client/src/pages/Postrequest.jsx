import { useState } from "react";
import Wordform from "../components/Wordform";
import Deleteword from "../components/Deleteword";

export default function Postrequest() {
  const [pageAdd, SetPageAdd] = useState(true);

  const handleClick = () => {
    // if page add is true show Wordform to ass a word
    if (pageAdd) {
      SetPageAdd(false);
      // if page add is false show Deleteword to delete a word
    } else if (!pageAdd) {
      SetPageAdd(true);
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
          Delete word
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
