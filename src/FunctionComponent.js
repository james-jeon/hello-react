import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FunctionComponent = ({ name, number }) => {
    // const { name } = this.props;
    const [ text, setText ] = useState('default');
    const onClickEnter = () => setText("Hi");
    const onClickLeave = () => setText("Bye");
    return (
        <>
            <div>{ name }: {number}</div>
            <br/>
            <div>{ text }</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </>
    );
}

FunctionComponent.defaultProps = {
    name: "aa"
};

FunctionComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};



export default FunctionComponent;