const React = require('react');
const { Component } = React;

function WordRelay() {
    const [word, setWord] = React.useState('');
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const [turn, setTurn] = React.useState(1);
    const [number, setNumber] = React.useState(0);
    const total = parseInt(number);
    const inputRef = React.useRef(null);

    React.useEffect(() => {
        setNumber(prompt("몇명인가요?"));    
    },[]);

    
    const onClickEvent = () => {
      
        if(word[word.length-1] === value[0] || word.length === 0) {
            setWord(value);
            
            setValue('');
            inputRef.current.focus();
            
            console.log('turn: ',turn, typeof(turn));
            console.log('number: ', total, typeof(total));

            if(word.length > 0) {
                setResult('정답');
            };

            if(turn === total) {
                setTurn(1);
                console.log('같음')
            } else {
                setTurn(turn + 1);
            };

        } else {
            setResult('땡!');
            setValue('');
            inputRef.current.focus();
        }
    }

    const onChangeEvent = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{turn}번째 차례입니다</h1>
            <div>{word}</div>
            <input ref={inputRef} type='text' id='inpWord' value={value} onChange={onChangeEvent} />
            <button type='button' id='btnWord' onClick={onClickEvent}>확인</button>
            <div>{result}</div>
        </> 
    ); 
    
}


module.exports = WordRelay;