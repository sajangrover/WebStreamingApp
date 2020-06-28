import React, { Component } from 'react'
import axios from 'axios';


const MoviesCard = (props) => {
    const { _id, name, link, ontime} = props.movie
    return (
        <div className="container moviecard" >
            <video id="myVideo" width="320" height="176" controls autoPlay>
                <source src="https://www.youtube.com/watch?v=KP_A2ooJIYI&list=RDMMKP_A2ooJIYI&start_radio=1" type="video/mp4" />
            </video>
            <h2>{name}</h2>
        </div>
    )
}

class Movies extends Component {
    state={
        movies : []
    }
    componentDidMount = () =>{
        axios.get('http://localhost:5000/movies')
        .then(res =>{
            this.setState({
                movies : res.data.movies
            },()=>{})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    handleClick() {

    }

    render() {
        return (
            <div className="container wrapper">
                <div className="moviecontainer">
                {
                    this.state.movies.map(movie => {
                        return <MoviesCard onClick={this.handleClick} movie={movie}/>
                    })
                }
                </div>
                
            </div>
        )
    }
}

export default Movies
