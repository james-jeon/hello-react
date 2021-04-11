import React, { Component } from 'react';
import PropTypes from 'prop-types';

//함수형
// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <>
//             <div>my name is {name}</div>
//             <div>children is {children}</div>
//             <br/>
//             <h2>제가 좋아하는 숫자는 {favoriteNumber}입니다.</h2>
//         </>
//     );
// }
// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

//클래스형
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <>
                <div>my name is {name}</div>
                <div>children is {children}</div>
                <br/>
                <h1>my favorite number is {favoriteNumber}</h1>
            </>
        );
    }
}

export default MyComponent;