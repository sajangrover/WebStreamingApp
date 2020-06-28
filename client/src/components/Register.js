import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2:""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        },()=>{ })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:5000/register',this.state)
        .then(res => {
            window.location.reload(false);
        })
        .catch(error => {
            window.alert("Enter valid Information")
        })

    }
    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="name" type="text" placeholder="Enter Name" className="validate" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" placeholder="Enter Email" className="validate" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" placeholder="Enter Password" className="validate" onChange={this.handleChange} required/>
                        </div>
                        <div className="input-field col s12">
                            <input id="password2" type="password" placeholder="Enter Confirm Password"className="validate" onChange={this.handleChange} required/>
                        </div>
                        <button class="btn-large waves-effect waves-light submit" onClick={this.handleSubmit}>Regsiter</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register
