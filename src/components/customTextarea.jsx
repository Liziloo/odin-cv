import { useState } from "react";

function CustomTextarea({ id = '', label = '', text = ''}) {
  const [value, setValue] = useState(text);

  return (
    <div className="col">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={id} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}

export default CustomTextarea;
