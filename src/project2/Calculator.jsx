/**
 * Todo: handle user input fields
 * Todo: handle operations
 *  Todo: handle a list of history
 * Todo: render history list
 * Todo: restore the history
 *
 */

import { useState } from "react";

const initialInputState = {
  a: 0,
  b: 0,
};

const Calculator = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);

  const handleAllOperations = (operators) => {
    // const f = new Function(
    //   `operators`,
    //   `return ${inputState.a} ${operators} ${inputState.b}`
    // );
    // setResult(f(operators));
    setResult(eval(`${inputState.a} ${operators} ${inputState.b}`));
  };

  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };

  // handleChange function

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  // handleChange function

  // const handleInputFieldsA = (e) => {
  //   setInputState({
  //     ...inputState,
  //     a: parseInt(e.target.value),
  //   });
  // };

  // handleChange  function

  // const handleInputFieldsB = (e) => {
  //   setInputState({
  //     ...inputState,
  //     b: parseInt(e.target.value),
  //   });
  // };

  // handleChange function

  // const handleInputChange = (key, value) => {
  //   setInputState({
  //     ...inputState,
  //     [key]: parseInt(value),
  //   });
  // };

  // handleInputChange function
  // const handleInputChange = (inp) => {
  //   setInputState({
  //     ...inputState,
  //     ...inp,
  //   });
  // };

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <h1>Result : {result}</h1>
      <div>
        <p>Inputs</p>
        <input
          type="number"
          value={inputState.a}
          name="a"
          onChange={
            // (e) => handleInputChange({ a: parseInt(e.target.value) })
            handleInputChange
          }
        />
        <input
          type="number"
          value={inputState.b}
          name="b"
          onChange={
            // (e) => handleInputChange({ b: parseInt(e.target.value) })
            handleInputChange
          }
        />
      </div>
      <div>
        <p>Operators</p>
        <button onClick={() => handleAllOperations("+")}>+</button>
        <button onClick={() => handleAllOperations("-")}>-</button>
        <button onClick={() => handleAllOperations("*")}>*</button>
        <button onClick={() => handleAllOperations("/")}>/</button>
        <button onClick={() => handleAllOperations("%")}>%</button>
        <button onClick={handleClearOps}>clear</button>
      </div>
      <div>
        <p>History</p>
        <p>
          <small>There no history</small>
        </p>
        <ul>
          <li>
            <p>Operations 10 + 20 ,Result = 30 </p>
            <small>19/02/2024</small>
            <button>Restore</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
