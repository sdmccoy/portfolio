import React from 'react';
import {Link} from 'react-router-dom';
import * as util from '../../../lib/util.js';
import './_navbar.scss';

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
        <Link to='https://www.linkedin.com/in/sdmccoy/' target='_blank'>
          <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        </Link>
        <Link to='https://github.com/sdmccoy' target='_blank'>
          <i className='fa fa-github-square' aria-hidden='true'></i>
        </Link>
        {util.renderIf(this.state.showNavMenu,
          <div className='navbar-menu'>
            <Link to='/'>Home</Link>
            <div className='clear-float'></div>
            <Link to='/projects'>Projects</Link>
            <div className='clear-float'></div>
            <Link to='/community'>Community</Link>
            <div className='clear-float'></div>
            <Link to='/about'>About</Link>
            <div className='clear-float'></div>
            <Link to='/contact'>Contact</Link>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
