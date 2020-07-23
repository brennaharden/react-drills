import React from 'react';
import Todo from './Todo'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput: '',
      stuff: []
    }
    
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  addTask(){
    const newTask = this.state.userInput
    this.setState({
      stuff: [...this.state.stuff, newTask],
      userInput: ''
    })
  }

  render(){
    let newList = this.state.stuff.map((element, index) => {
      return <Todo key={index} task={element} />
    })
  
  
    return (
    <div className="App">
      <h1>My To-Do list:</h1>
      <input value={this.state.userInput} onChange={ e => this.handleChange(e)}/>
      <button onClick={() => this.addTask()}>Add</button>
      <br/>
      {newList}
    </div>
  );
  }
}

export default App;
