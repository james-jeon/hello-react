import React, { useState } from 'react';

const Say = () => {
    const [ text, setText ] = useState(142424);
    const onClickEnter = () => setText("안녕");
    const onClickLeave = () => setText("잘가");

    const [ color, setColor ] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{ text }</h1>
            <br/>
            <button style ={{ color: 'red' }} onClick={()=> setColor('red') }>red</button>
            <button style ={{ color: 'yellow' }} onClick={()=> setColor('yellow') }>yellow</button>
            <button style ={{ color: 'green' }} onClick={()=> setColor('green') }>green</button>
            <h1 style={{ color }}>{ text }</h1>
        </div>
    )
}

export default Say;