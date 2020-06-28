import React, { Component } from 'react'
import Cookies from 'js-cookie'

class Navbar extends Component {
    state = {
        token : ""
    }
    componentDidMount = () => {
        this.setState({
            token : Cookies.get('token')
        }) 
    }
    handleSignOut = () => {
        this.setState({
            token : ""
        },()=>{
            Cookies.remove('token');
        })
    }
    render() {
        return (
            <nav className ="nav-wrapper black darken-2">
                <div className="container">
                    <ul className="left ">
                        <li><a href = "/" className="waves-effect waves-light btn">Movies</a></li>
                        <li><a className="waves-effect waves-light btn">Channels</a></li>
                        <li><a className="waves-effect waves-light btn">Web Series</a></li>
                    </ul>
                    <ul className="right">
                    {
                        this.state.token ? 
                        <li><a onClick={this.handleSignOut} className="waves-effect waves-light btn">Sign Out</a></li> :
                        <li><a href ="/login" className="waves-effect waves-light btn">Sign In</a></li>
                    }
                    
                    </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;
