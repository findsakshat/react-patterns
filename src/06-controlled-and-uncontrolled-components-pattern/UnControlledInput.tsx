import { ChangeEvent, Fragment, useRef, useState } from "react";

export default function UnControledInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [output, setOutput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOutput(inputRef.current?.value as string);
  }

  return (
    <Fragment>
      <input 
        ref={inputRef}
        placeholder="Enter your message..."
        onChange={handleChange}
        className="p-2 border rounded-md w-full text-sm"
      />
      <p className="mt-2 text-sm">{output}</p>
    </Fragment>
  )
}