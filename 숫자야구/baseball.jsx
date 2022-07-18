// const React = require('react');
import React from 'react';
import Try from './try';

const getNumbers = () => {
    
    const numberArray = [];
    const answerArray = [];
    for (let i = 0; i < 9; i++) {
        numberArray.push(i + 1);
    }

    for (let i = 0; i < 4; i++) {
        const index = Math.floor((Math.random() * numberArray.length));
        answerArray.push(numberArray[index]);
        numberArray.splice(index, 1);
    }
    return answerArray;
}

function Baseball() {
    const [inputValue, setInputValue] = React.useState('');
    const [logs, setLogs] = React.useState('');
    const [answer, setAnswer] = React.useState(getNumbers());
    // const [numbers, setNumbers] = React.useState([]);
    const [tries, setTries] = React.useState(0);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(inputValue === answer.join('')) {
            setLogs('홈런!');
        }   
    }
    console.log('answer: ', answer)
    
    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <form id="form" onSubmit={handleSubmitForm}>
                <input type="text" id="input" maxLength="4" value={inputValue} onChange={handleChangeInput} />
                <button>확인</button>
            </form>
            <div>시도 : {tries}</div>
            <div>{logs}</div>
            <ul>
                <Try />
            </ul>
        </>
    );
}

// module.exports = Baseball;
export default Baseball;