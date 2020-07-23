import React from 'react';
import NewTask from './NewTask'
import List from './List'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      stuff: []
    }
    this.addTask = this.addTask.bind(this)
    
  }


  addTask(task){
    this.setState({
      stuff: [...this.state.stuff, task]
    })

    
  }
  render(){
  return (
    <div className="App">
     <h1>My To-Do List:</h1>
      <NewTask add={this.addTask} />
      <List list={this.state.stuff}/>
      <br/>
    </div>
    
  );
  
  }
  
}

export default App;
