import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.actionEnter = this.actionEnter.bind(this)
    }

    enterUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    enterPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    actionEnter(){
    
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
                <input value={this.state.username} onChange={ e => this.enterUsername(e)}/>
                <input value={this.state.password} onChange={ e => this.enterPassword(e)}/>
                <button onClick={() => this.actionEnter()}>Login</button>
            </div>
        )
    }
}

export default Login