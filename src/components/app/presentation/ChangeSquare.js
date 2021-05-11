import React from 'react';
import PropTypes from 'prop-types';

function ChangeSquare({ color, meme }) {
  return (
    <div
      style={{
        backgroundColor: color,
        backgroundImage: `url(${meme})`,
        height: 700,
        width: 700,
      }}
    ></div>
  );
}

ChangeSquare.propTypes = {
  color: PropTypes.string.isRequired,
  meme: PropTypes.string.isRequired,
};

export default ChangeSquare;
