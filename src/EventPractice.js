import React, { Component, useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        message: '',
        username: ''
    });
    const { username, message} = form;
    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(`${username}; ${message}`);
        setForm({
            username: '',
            message: ''
        });
    }
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습: {username}</h1>
            <h1>이벤트 연습: {message}</h1>
            <input 
                type="text"
                name="username"
                placeholder="user"
                value = { username }
                onChange={ onChange }
            />
            <input 
                type="text"
                name="message"
                placeholder="message"
                value = { message }
                onChange={ onChange }
                onKeyPress={ onKeyPress }
            />
            <button onClick={ onClick }>confirm</button>
        </div>
    );
}

// 클래스형
// class EventPractice extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: '',
//             username: ''
//         };
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     };
//     handleClick = () => {
//         console.log(this);
//         alert(`${this.state.username}: ${this.state.message}`);
//         this.setState({
//             message: '',
//             username: ''
//         }); 

//     };
//     handlekeyPress = (e) => {
//         console.log(e);
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     };
//     render() {
//         const { message, username } = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습: { message }</h1>
//                 <h1>이벤트 연습: { username }</h1>
//                 <input 
//                     type="text"
//                     name="username"
//                     placeholder="user"
//                     value = { username }
//                     onChange={ this.handleChange }
//                 />
//                 <input 
//                     type="text"
//                     name="message"
//                     placeholder="message"
//                     value = { message }
//                     onChange={ this.handleChange }
//                     onKeyPress={ this.handlekeyPress }
//                 />
//                 <button onClick={ this.handleClick }>confirm</button>
//             </div>
//         );
//     }
// }

export default EventPractice;