import React, { Component } from 'react';


class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { // state 초기값 설정
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0
    }
    render() {
        console.log("NNNNNNNNN ", this.state)
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{ number }</h1>
                <h1>고정값: { fixedNumber }</h1>
                <button onClick={() => {
                    // this.setState({ number: number + 1 });
                    // this.setState({ number: this.state.number + 1 });
                    this.setState((prevState) => {
                        return {
                            number: prevState.number + 1
                        };
                    }, () => {
                        console.log("NNNNNNNNNNNNnnn callback");
                    });
                    this.setState((prevState) => ({
                        number: prevState.number + 1
                    }));
                }}>+1</button>
            </div>
        );;
    }
}

export default Counter;