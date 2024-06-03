import { useId } from "react";
import css from "./SearchBox.module";

export default function SearchBox({ inputValue, onType }) {
  const userInputId = useId();

  const handleChange = (event) => {
    onType(event.target.value);
  };
  return (
    <>
      <label htmlFor={userInputId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="userValue"
        value={inputValue}
        onChange={handleChange}
        id={userInputId}
      />
    </>
  );
}