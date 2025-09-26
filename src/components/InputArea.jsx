import React, { useState } from "react";
import { validateInput } from "./Validations";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);

  // update state and clear previous error
  function handleChange(event) {
    setInputText(event.target.value);
    if (error) setError(null);
  }

  // validate on submit (Add button)
  function handleSubmit(event) {
    event.preventDefault();
    const validationError = validateInput(inputText);

    if (validationError) {
      setError(validationError);
      return;
    }

    // send trimmed value to parent
    props.thenAdd(inputText.trim());
    setInputText("");
    setError(null);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        placeholder="Add a new task..."
      />
      <button type="submit">
        <span>Add</span>
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default InputArea;
