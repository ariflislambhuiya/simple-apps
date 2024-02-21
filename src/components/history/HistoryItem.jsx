import PropTypes from "prop-types";
import React from "react";
import Button from "../ui/Button";
const HistoryItem = ({ historyItem, handleRestoreBtn, disabled }) => {
  return (
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
        <Button
          text="Restore"
          onClick={() => handleRestoreBtn(historyItem)}
          disabled={disabled}
        />
      </div>
    </li>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  handleRestoreBtn: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
