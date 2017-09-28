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
      <nav className='navbar'>
        <MediaQuery minWidth={760}>
          <Link to='/'><i className="fa fa-home" aria-hidden="true"></i></Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/community'>Community</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </MediaQuery>
        <MediaQuery maxWidth={759}>
          <i onClick={this.handleCompassClick} className='fa fa-compass' aria-hidden='true'></i>
        </MediaQuery>
        <Link to='https://www.linkedin.com/in/sdmccoy/' target='_blank'>
          <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        </Link>
        <Link to='https://github.com/sdmccoy' target='_blank'>
          <i className='fa fa-github-square' aria-hidden='true'></i>
        </Link>
        {util.renderIf(this.state.showHamburgerMenu,
          <div className='navbar-menu'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/community'>Community</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
