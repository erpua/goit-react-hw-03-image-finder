import React from 'react';
import PropTypes from 'prop-types';

import '../../styles.css';

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

const Button = ({ onButton }) => (
  <button type="button" className="Button" onClick={onButton}>
    Load more
  </button>
);

Button.propTypes = {
  onButton: PropTypes.func.isRequired,
};

export default Button;
