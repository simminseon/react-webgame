const React = require('react');

const buttonStyle = {
    width: '50px',
    height: '50px',
    margin: '5px',
  }
  

function Button({ onClick, value }) {
    return (
        <button type='button' style={buttonStyle} onClick={onClick}>{value}</button>
    );

}

module.exports = Button;