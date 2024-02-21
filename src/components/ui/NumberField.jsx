import PropTypes from "prop-types";

const NumberField = ({ value, onChange, name }) => {
  const style = {
    padding: "0.25rem 1rem",
    borderRadius: "0.1rem",
    border: "1px solid gray",
    background: "#fff",
    outline: "none",
  };

  return (
    <input
      style={style}
      type="number"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

NumberField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NumberField;
