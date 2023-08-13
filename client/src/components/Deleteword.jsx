import { useState } from "react";

export default function Deleteword() {
  const [input, SetInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    SetInput(e.target.value);
  };

  const handleSubmit = async () => {
    const { word } = req.body;

    try {
      const request = await fetch(`/api/words`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });
    } catch (error) {}

    /*
        
         try {
      const response = await fetch(`/api/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });*/
  };
  return (
    <div>
      <div>
        <h3>Which word do you want to delete? </h3>
      </div>
      <form>
        <label></label>
        <input
          name="word-to-delete"
          placeholder="Está segura mi pez?"
          value={input}
          onChange={handleChange}
        ></input>
        <button>Sin miedo</button>
      </form>
    </div>
  );
}
