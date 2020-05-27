import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ text }) => (
  <button className="button" type="submit">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
