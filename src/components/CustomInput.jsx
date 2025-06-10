import { useState } from "react";

function CustomInput({ id = '', label = '', text = ''}) {
  const [value, setValue] = useState(text);

  return (
    <div className="col">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default CustomInput;
