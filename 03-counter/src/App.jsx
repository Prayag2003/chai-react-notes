import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 0;
  // function addVal() {
  //   counter = counter + 1;
  //   console.log(counter);
  // }
  // function remVal() {
  //   counter = counter - 1;
  //   console.log(counter);
  // }

  const [counter, setCounter] = useState(0);
  const [info, setInfo] = useState("");
  const [infoColor, setInfoColor] = useState("green");

  const addVal = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setInfo(`Valid Counter Value: ${counter + 1}`);
      setInfoColor("green");
    } else {
      setCounter(20);
      setInfo("Counter value can't be more than 20");
      setInfoColor("red");
    }
  };

  const remVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setInfo(`Valid Counter Value: ${counter + 1}`);
      setInfoColor("green");
    } else {
      setCounter(0);
      setInfo("Counter value can't be less than 0");
      setInfoColor("red");
    }
  };

  return (
    <>
      <h1>React Chai</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addVal}>Add Value {counter} </button>
      <br />
      <button onClick={remVal}>Remove Value {counter}</button>
      <footer>
        <p style={{ color: infoColor }}>{info}</p>
        <p>Created by: Prayag</p>
      </footer>
    </>
  );
}

export default App;
