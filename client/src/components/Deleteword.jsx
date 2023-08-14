import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Deleteword() {
  const [input, SetInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    SetInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const word = input;
    console.log(word);

    try {
      const request = await fetch(`/api/words/${word}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`You deleted ${word}`);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <div>
        <h3>Which word do you want to delete? </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          name="word-to-delete"
          placeholder="Está segura mi pez?"
          value={input}
          onChange={handleChange}
        ></input>
        <br></br>
        <button type="submit" className="btn btn-outline-dark">
          Sin miedo
        </button>
      </form>
    </div>
  );
}
