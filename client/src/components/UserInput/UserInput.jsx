import { useState } from "react";
import "./UserInput.css";

function UserInput(props) {
  const { word, handleChange, handleSubmit } = props;
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
    handleChange(e);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 32) {
      e.preventDefault();
      if (e.target.value === word) {
        handleSubmit();
        setValue("");
      }
    }
  };
  return (
    <div className="user-input-container">
      <input
        type="text"
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default UserInput;
