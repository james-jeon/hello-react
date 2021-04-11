import logo from './logo.svg';
import './App.css';
import { Component, useDebugValue } from 'react';
import MyComponent from "./MyComponent";
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

//랜덤 색상 생성
const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}
// class App extends Component {
//   render() {
    // const name = "리액트";
    // return <MyComponent name={name} favoriteNumber={5}>리액트</MyComponent>;
    // return (
    //   <>
    //     <Counter/>
    //     <br/>
    //     <Say/>
    //   </>
    // );
    // return <EventPractice/>;
    // return (
    //   <>
    //     <ValidationSample/>
    //     <ScrollBox ref={(ref) => this.scrollBox=ref}/>
    //     <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
    //   </>
    // );
    // return <IterationSample/>;
    // return <LifeCycleSample color={}/>
    // return <ClassComponent name={name}/>;
    // return <FunctionComponent name={ name } number={ 3223 }/>;
    // return <FunctionComponent/>;
//   }
// }

// const App = () => {
//   return <ValidationSample/>;
// }

export default App
