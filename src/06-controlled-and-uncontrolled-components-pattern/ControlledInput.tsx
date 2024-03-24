import { ChangeEvent, Fragment, useState } from "react";

export default function ControlledInput() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setOutput(e.target.value);
  }

  return (
    <Fragment>
      <input 
        placeholder="Enter your message..."
        value={value}
        onChange={handleChange}
        className="p-2 border rounded-md w-full text-sm"
      />
      <p className="mt-2 text-sm">{output}</p>
    </Fragment>
  )
}