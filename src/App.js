import logo from './logo.svg';
import './App.css';
import ButtonGroup from './ButtonGroup';
import React from 'react';
import {store} from './store'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    console.log(e.target.value);
    store.dispatch({type: "UPDATE_TECH", tech: e.target.value})
  }

  render() { 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to {store.getState().tech}
        <ButtonGroup handler={this.onClickHandler} />
      </header>
      
    </div>
  )};
}

export default App;
