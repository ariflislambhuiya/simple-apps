import { useState } from "react";
import shortid from "shortid";

import HistorySection from "../components/history/HistorySection";
import InputSection from "../components/inputs/InputSection";
import OperationSection from "../components/operations/OperationSection";

const initialInputState = {
  a: 10,
  b: 20,
};

const App3 = () => {
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

      <InputSection inputs={inputState} handleInputChange={handleInputChange} />

      <OperationSection
        handleAllOperations={handleAllOperations}
        handleClearOps={handleClearOps}
      />

      <HistorySection
        histories={histories}
        restoredHistory={restoredHistory}
        handleRestoreBtn={handleRestoreBtn}
      />
    </div>
  );
};

export default App3;
