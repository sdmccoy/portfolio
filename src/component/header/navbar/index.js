import React from 'react';
import {Link} from 'react-router-dom';
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
          <div className='navbar-menu'>
            <Link to='/projects'>Projects</Link>
            <Link to='/community'>Community</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>)}
        <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        <i className='fa fa-github-square' aria-hidden='true'></i>

      </nav>
    );
  }
}

export default NavBar;
