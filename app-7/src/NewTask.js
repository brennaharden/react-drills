import React from 'react';

class NewTask extends React.Component{
    constructor(){
        super();
        this.state = {
            userInput: ''
        }
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleChange(value){
        this.setState({
          userInput: value
        })
      }

      handleAddTask() {
          this.props.add(this.state.userInput)
          this.setState ({
              userInput: ''
          })
      }

    render(){
        return (
        <div>
            <input value={this.state.userInput}
                    onChange={ e => this.handleChange(e.target.value)}/>
            <button onClick={() => this.handleAddTask()}>Add</button>
            
        </div>
        
        )
}
}

export default NewTask;