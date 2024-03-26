import { useEffect, useRef } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, SetNumberAllowed] = useState(false);
  const [isCharAllowed, SetCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("bg-blue-700");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let string = "abcdefhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "@#$%^*.";

    if (isNumberAllowed) {
      string += numbers;
    }
    if (isCharAllowed) {
      string += specialChars;
    }

    for (let i = 1; i <= length; ++i) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, isCharAllowed, isNumberAllowed, PasswordGenerator]);

  return (
    <>
      <div
        className="
        w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700
      "
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>

          <button
            style={{ backgroundColor: color }}
            onClick={copyPasswordToClipboard}
            className={`outline-none text-white  px-3 py-0.5 shrink-0 hover:bg-green-500 ${color}`}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={isNumberAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                SetNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={isCharAllowed}
              className="cursor-pointer"
              onChange={(e) => {
                SetCharAllowed((prev) => !prev);
              }}
            />
            <label>Charachter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
