import { useState } from "react";

function CustomInput({ id = '', label = '', text = '' }) {
  const [value, setValue] = useState(text);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={e => setValue(e.target.value)} />
    </>
  );
}

export default CustomInput;
