import PropTypes from "prop-types";
import React from "react";

import NumberField from "../../components/ui/NumberField";

const InputSection = ({ inputs, handleInputChange }) => {
  return (
    <div>
      <p>Inputs Number</p>
      <NumberField value={inputs.a} name="a" onChange={handleInputChange} />
      <NumberField value={inputs.b} name="b" onChange={handleInputChange} />
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
