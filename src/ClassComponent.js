import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }
    static defaultProps = {
        name: "전종민"
    };
    static propTypes = {
        name: PropTypes.string,
        aaa: PropTypes.string.isRequired
    };
    render() {
        const { number } = this.state;
        const { name, aaa } = this.props;
        return (
            <div>
                <h1>{ aaa }</h1>
                <h1>{ name }: { number }</h1>
                <button onClick={() => {
                    this.setState((prevState) => {
                        return {
                            number: prevState.number + 1     
                        };
                    });
                }}>+1</button>
            </div>
        );
    }
}

export default ClassComponent;