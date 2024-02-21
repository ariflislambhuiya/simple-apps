import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";
import Button from "../ui/Button";

const OperationSection = ({ handleAllOperations, handleClearOps }) => {
  const operation = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleAllOperations("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleAllOperations("-"),
    },
    {
      id: shortid.generate(),
      text: "*",
      onClick: () => handleAllOperations("*"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleAllOperations("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleAllOperations("%"),
    },
    {
      id: shortid.generate(),
      text: "**",
      onClick: () => handleAllOperations("**"),
    },
    {
      id: shortid.generate(),
      text: "Clear",
      onClick: handleClearOps,
    },
  ];
  return (
    <div>
      <p>Operators</p>
      {operation.map((ops) => (
        <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
      ))}
    </div>
  );
};

OperationSection.propTypes = {
  handleAllOperations: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
