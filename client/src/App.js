/* src/App.js */

import './App.css';

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from './Components/Home';
import Comments from './Components/Comments';
import Posts from './Components/Posts';
import Todos from './Components/Todos';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link to="/">Homes</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/todos">Todos</Link></li>
              </ul>
            </div>
        </nav>

        <Route exact={ true } path="/" component={ Home }/>
        <Route path="/comments" component={ Comments }/>
        <Route path="/posts" component={ Posts }/>
        <Route path="/todos" component={ Todos }/>
      </div>
    );
  }
}

export default App;
