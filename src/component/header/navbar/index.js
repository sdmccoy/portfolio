import React from 'react';

import * as util from '../../../lib/util.js';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showNavMenu: false,
    };
    this.handleCompassClick = this.handleCompassClick.bind(this);
  }

  handleCompassClick(){
    !this.state.showNavMenu ?
      this.setState({showNavMenu: true}) :
      this.setState({showNavMenu: false});
  }

  render(){
    return(
      <nav className='navbar'>
        <i onClick={this.handleCompassClick} className='fa fa-compass' aria-hidden='true'></i>
        {util.renderIf(this.state.showNavMenu,
          <ul className='navbar-menu'>
            <li>Projects</li>
            <li>Community</li>
            <li>About</li>
            <li>Contact</li>
          </ul>)}
        <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        <i className='fa fa-github-square' aria-hidden='true'></i>

      </nav>
    );
  }
}

export default NavBar;
