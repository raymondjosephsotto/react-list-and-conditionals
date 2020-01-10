import React, {Component}from 'react';
import './App.css';
import Instructions from './Instructions.js'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = event => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);

    const updatedText =  text.join('');

    this.setState({userInput: updatedText});
  }

render() {
  const charList = this.state.userInput.split('').map((ch,index)=>{
    return(
      <Char 
      character={ch} 
      key={index}
      clicked={()=>this.deleteCharHandler(index)}/>
    )
  })
  return (
    <div className="App">
      <div>
        <h1>React Practice: List & Conditionals</h1>
        <Validation inputLength={this.state.userInput.length}/>
        <input 
        type='text'
        onChange={this.inputChangedHandler}
        value={this.state.value}/>
        <h3>{this.state.userInput}</h3>
        {charList}
        <Instructions/>
      </div> 
    </div>
  );
}
}

export default App;
