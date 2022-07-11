const { useEffect } = require('react');
const React = require('react');
const { Component } = React;

const buttonStyle = {
  width: '50px',
  height: '50px',
  margin: '5px',
}

const operatorStyle = {
  width: '50px',
  height: '50px',
  margin: '5px',
  textAlign: 'center',
  boxSizing: 'border-box'
}

const resultStyle = {
  width: '170px',
  height: '50px',
  margin: '5px',
  textAlign: 'right',
  boxSizing: 'border-box'
}

function Calculator() {
  const [firstNum, setFirstNum] = React.useState('');
  const [secondNum, setsSecondNum] = React.useState('');
  const [operate, setOperate] = React.useState('');
  const [result, setResult] = React.useState('');
  // let results = 'sss';
  useEffect(() => {
    // onClickNumber();
    // console.log('firstNum: ', firstNum);
  }, [firstNum, result]);

  const onClickNumber = (e) => {
    if (operate) {
      setsSecondNum(prev => prev + e.target.textContent);
      setResult(secondNum);
      
    } else {
      setFirstNum(prev => prev + e.target.textContent);
      setResult(firstNum);
      // result = firstNum;
      // console.log('firstNum: ', firstNum);
      console.log('result2: ', result)
      // console.log(typeof(firstNum))
    }
  }

  const onClickOperator = (e) => {
    if (!operate && firstNum === '') { 
      alert('숫자를 먼저 입력하세요!');
      
    } else {
      setOperate(e.target.textContent);
    }
    
  }

  const onClickReset = () => {
    setFirstNum('');
    setsSecondNum('');
    setOperate('');
    setResult('');
  }

  const onClickCalculator = () => {
    switch ( operate ) {
      case '+':
        setResult(parseInt(firstNum) + parseInt(secondNum));
        break;
      case '-':
        setResult(firstNum - secondNum);
        break;
      case 'x':
        setResult(parseInt(firstNum) * parseInt(secondNum));;
        break;
      case '/':
        setResult(parseInt(firstNum) / parseInt(secondNum));;
        break;
      default:
        break;
    }

    if (firstNum === '' || secondNum === '') {
      alert('숫자를 입력하세요!')
    } else if (operate === '') {
      alert('연산자를 입력하세요!')
    }
  }

  return (
    <>
      <input style={operatorStyle} type="text" value={operate} readOnly />
      <input style={resultStyle} type="text" value={result} readOnly />
      <div>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>7</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>8</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>9</button>
        <button style={buttonStyle} onClick={onClickOperator} type='button'>+</button>
      </div>
      <div>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>4</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>5</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>6</button>
        <button style={buttonStyle} onClick={onClickOperator} type='button'>-</button>
      </div>
      <div>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>1</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>2</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>3</button>
        <button style={buttonStyle} onClick={onClickOperator} type='button'>/</button>
      </div>
    
      <div>
        <button style={buttonStyle} onClick={onClickReset} type='button'>C</button>
        <button style={buttonStyle} onClick={onClickNumber} type='button'>0</button>
        <button style={buttonStyle} onClick={onClickCalculator} type='button'>=</button>
        <button style={buttonStyle} onClick={onClickOperator} type='button'>x</button>
      </div>
    </>
  );
}


  module.exports = Calculator;