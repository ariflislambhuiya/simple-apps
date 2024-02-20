/**
 * Todo: handle user input fields
 * Todo: handle operations
 *  Todo: handle a list of history
 * Todo: render history list
 * Todo: restore the history
 *
 */

import { useState } from "react";
import shortid from "shortid";

const initialInputState = {
  a: 10,
  b: 20,
};

const Calculator = () => {
  // function* generateId() {
  //   let id = 0;
  //   while (true) {
  //     yield id++;
  //   }
  // }

  // const getId = generateId();

  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoredHistory, setRestoredHistory] = useState(null);

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

  const handleAllOperations = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid Input");
      return;
    }
    const f = new Function(
      `operation`,
      `return ${inputState.a} ${operation} ${inputState.b}`
    );

    const result = f(operation);

    setResult(result);
    // setResult(eval(`${inputState.a} ${operators} ${inputState.b}`));

    const historyItem = {
      id: shortid.generate(),
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };

    setHistories([historyItem, ...histories]);
  };

  const handleClearOps = () => {
    setInputState({ ...initialInputState });
    setResult(0);
    setHistories([]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    setResult(historyItem.result);
    setRestoredHistory(historyItem.id);
  };

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
        {histories.length === 0 ? (
          <p>
            <small>There no history</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  Operation:{historyItem.inputs.a}
                  {historyItem.operation}
                  {historyItem.inputs.b} Result = {""}
                  {historyItem.result}
                </p>
                <small>
                  {historyItem.date.toLocaleDateString()}
                  {historyItem.date.toLocaleTimeString()}
                </small>
                <div>
                  <button
                    onClick={() => handleRestoreBtn(historyItem)}
                    disabled={
                      restoredHistory !== null &&
                      restoredHistory === historyItem.id
                    }
                  >
                    restore
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calculator;
