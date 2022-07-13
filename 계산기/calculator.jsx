const React = require('react');
const Button = require('./button');


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
  const [secondNum, setSecondNum] = React.useState('');
  const [operate, setOperate] = React.useState('');
  const [result, setResult] = React.useState('');

  const onClickNumber = (e) => {
    if (!operate) { // 비었을때
      setFirstNum(prev => prev + e.target.textContent);
      setResult(prev => prev + e.target.textContent);
      console.log('첫번째 값: ', firstNum);
      return;
    }

    if(!secondNum) { // 두번째 비었을때
      setResult('');
    }

    setSecondNum(prev => prev + e.target.textContent);
    setResult(prev => prev + e.target.textContent);

  }
  const onClickOperator = (e) => {
    if(e.target.textContent === '-') {
      if(firstNum) {
        setSecondNum(e.target.textContent + secondNum);
        setResult(e.target.textContent + secondNum);
        return;
      }
      setFirstNum(e.target.textContent + firstNum);
      setResult(e.target.textContent + firstNum);
    }


    if (firstNum === '') { 
      alert('숫자를 먼저 입력하세요1111!');
    } else {
      setOperate(e.target.textContent);
    }

    if(secondNum) {
      switch ( operate ) {
        case '+':
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case '-':
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case 'x':
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case '/':
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setSecondNum('');
    }
  }

  const onClickReset = () => {
    setFirstNum('');
    setSecondNum('');
    setOperate('');
    setResult('');
  }

  const onClickCalculator = () => {
    if(secondNum) { 
      switch ( operate ) {
        case '+':
          setResult(parseInt(firstNum) + parseInt(secondNum));
          setFirstNum(parseInt(firstNum) + parseInt(secondNum));
          break;
        case '-':
          setResult(parseInt(firstNum) - parseInt(secondNum));
          setFirstNum(parseInt(firstNum) - parseInt(secondNum));
          break;
        case 'x':
          setResult(parseInt(firstNum) * parseInt(secondNum));
          setFirstNum(parseInt(firstNum) * parseInt(secondNum));
          break;
        case '/':
          setResult(parseInt(firstNum) / parseInt(secondNum));
          setFirstNum(parseInt(firstNum) / parseInt(secondNum));
          break;
        default:
          break;
      }

      setOperate('');
      setSecondNum('');

    } else {
      alert('숫자를 먼저 입력하세요.');
    }
  }

  return (
    <>
      <input style={operatorStyle} type="text" value={operate} readOnly />
      <input style={resultStyle} type="text" value={result} readOnly />
      <div>
        <Button onClick={onClickNumber} value={7}></Button>
        <Button onClick={onClickNumber} value={8}></Button>
        <Button onClick={onClickNumber} value={9}></Button>
        <Button onClick={onClickOperator} value={'+'}></Button>
      </div>
      <div>
        <Button onClick={onClickNumber} value={4}></Button>
        <Button onClick={onClickNumber} value={5}></Button>
        <Button onClick={onClickNumber} value={6}></Button>
        <Button onClick={onClickOperator} value={'-'}></Button>
      </div>
      <div>
        <Button onClick={onClickNumber} value={1}></Button>
        <Button onClick={onClickNumber} value={2}></Button>
        <Button onClick={onClickNumber} value={3}></Button>
        <Button onClick={onClickOperator} value={'/'}></Button>
      </div>
    
      <div>
        <Button onClick={onClickReset} value={'C'}></Button>
        <Button onClick={onClickNumber} value={0}></Button>
        <Button onClick={onClickCalculator} value={'='}></Button>
        <Button onClick={onClickOperator} value={'x'}></Button>
      </div>
    </>
  );
}

module.exports = Calculator;