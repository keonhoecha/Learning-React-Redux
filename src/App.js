import logo from './logo.svg';
import './App.css';
import ButtonGroup from './ButtonGroup';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tech: "React"};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    console.log(e.target.value);
    this.setState({tech: e.target.value});
  }
  render() { 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to {this.state.tech}
        <ButtonGroup handler={this.onClickHandler} />
      </header>
      
    </div>
  )};

  handleButtonChange(e) {

  }
}

export default App;
