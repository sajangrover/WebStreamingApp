import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie'


class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        },()=>{
            console.log(this.state)
        })

    }
    handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',this.state)
        .then(res => {
            Cookies.set("token", res.data.token, { expires: 1 });
            this.setState({
                loggedIn : true
            },()=>{
                window.location.reload(false);
            })
        })
        .catch(error => {
            window.alert("Enter valid Information")
        })
    }
    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to = "/" />;
        }
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" placeholder="Enter Email" className="validate" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" placeholder="Enter Password"className="validate" onChange={this.handleChange} required/>
                        </div>
                        <button class="btn-large waves-effect waves-light submit" onClick={this.handleSubmit}>Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
