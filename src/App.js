import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router';

const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to ='/' className="place">Home</NavLink></li>
    <li style={{float:'right'}}><NavLink to='/cart' className="place" >Cart</NavLink></li>
  </ul>
</nav>
class App extends Component {
  render() {
    return <div className='page-container'>
      <Navigation />
      <Router />
    </div>
  }
}

export default App;
