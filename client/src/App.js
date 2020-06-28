import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Form from './components/Form';
import './css/form.css'
import './css/movies.css'

import Movies from './components/Movies';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
       <Switch> 
        <Route exact path="/" component={Movies}/>
        <Route path="/login" component={Form}/>
      </Switch>
    </div>
  </BrowserRouter>

  );
}

export default App;
