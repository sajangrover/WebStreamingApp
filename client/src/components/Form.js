import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
class Form extends Component {
    state = {
        Active : "Login"
    }
    handleLogin = () => {
        this.setState({
            Active: "Login"
        })
    }
    handleRegister = () => {
        this.setState({
            Active: "Register"
        })
    }
    render() {
        return (
            <div className="container form" >
                <div className="conatiner links">
                    <button className="waves-effect waves-light btn signin" onClick={this.handleLogin}>Sign In</button> 
                    <button className="waves-effect waves-light btn register" onClick={this.handleRegister}>Register</button>
                </div>
                <div className="content">
                    {
                        this.state.Active === "Login" ? (
                            <Login/>
                        ) : (
                            <Register/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Form
