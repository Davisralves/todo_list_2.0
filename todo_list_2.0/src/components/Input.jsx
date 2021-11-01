import PropTypes from "prop-types"
import React from "react";

export default function Input({type, handleChange, value}) {
  return (
    <input type={type}  onChange={handleChange} value={value} />
  )
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}
