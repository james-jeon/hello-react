import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from "./MyComponent";
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice'
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox';

import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

class App extends Component {
  render() {
    const name = "리액트";
    // return <MyComponent name={name} favoriteNumber={5}>리액트</MyComponent>;
    // return (
    //   <>
    //     <Counter/>
    //     <br/>
    //     <Say/>
    //   </>
    // );
    // return <EventPractice/>;
    return (
      <>
        <ValidationSample/>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </>
    );
    // return <ClassComponent name={name}/>;
    // return <FunctionComponent name={ name } number={ 3223 }/>;
    // return <FunctionComponent/>;
  }
}

// const App = () => {
//   return <ValidationSample/>;
// }

export default App
