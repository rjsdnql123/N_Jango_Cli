import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, placeholder = '', onChange }) => (
  <input
    className="input"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
