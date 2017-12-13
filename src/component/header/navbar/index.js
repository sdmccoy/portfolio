import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import * as util from '../../../lib/util.js';
import './_navbar.scss';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showHamburgerMenu: false,
    };
    this.handleCompassClick = this.handleCompassClick.bind(this);
  }

  handleCompassClick(){
    !this.state.showHamburgerMenu ?
      this.setState({showHamburgerMenu: true}) :
      this.setState({showHamburgerMenu: false});
  }

  render(){
    return(
      <nav className='navbar' onClick={this.handleCompassClick}>
        <MediaQuery minWidth={760}>
          <Link to='/' className='nav-icon'><i className="fa fa-home" aria-hidden="true"></i></Link>
          <Link to='/projects' className='nav-words'>Projects</Link>
          <Link to='/community' className='nav-words'>Community</Link>
          <Link to='/about' className='nav-words'>About</Link>
          <Link to='/contact' className='nav-words'>Contact</Link>
          <Link to='https://www.linkedin.com/in/sdmccoy/' className='nav-icon' target='_blank'>
            <i className='fa fa-linkedin-square' aria-hidden='true'></i>
          </Link>
          <Link to='https://github.com/sdmccoy' className='nav-icon' target='_blank'>
            <i className='fa fa-github-square' aria-hidden='true'></i>
          </Link>
        </MediaQuery>
        <MediaQuery maxWidth={759}>
          <i onClick={this.handleCompassClick} className='fa fa-compass' aria-hidden='true'></i>
          <Link to='https://www.linkedin.com/in/sdmccoy/' className='nav-icon' target='_blank'>
            <i className='fa fa-linkedin-square' aria-hidden='true'></i>
          </Link>
          <Link to='https://github.com/sdmccoy' className='nav-icon' target='_blank'>
            <i className='fa fa-github-square' aria-hidden='true'></i>
          </Link>
        </MediaQuery>
        {util.renderIf(this.state.showHamburgerMenu,
          <div className='navbar-menu'>
            <Link to='/' onClick={this.handleCompassClick}>Home</Link>
            <Link to='/projects' onClick={this.handleCompassClick}>Projects</Link>
            <Link to='/community' onClick={this.handleCompassClick}>Community</Link>
            <Link to='/about' onClick={this.handleCompassClick}>About</Link>
            <Link to='/contact' onClick={this.handleCompassClick}>Contact</Link>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
