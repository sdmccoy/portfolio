import React from 'react';
import {Link} from 'react-router-dom';
import './_navmain.scss';

class NavMain extends React.Component {

  render(){
    return(
      <div className='navmain'>
        <Link to='/projects' className='projects-nav'>
          <i className="fa fa-laptop" aria-hidden="true"></i>
          <h4>PROJECTS</h4>
        </Link>
        <Link to='/community' className='community-nav'>
          <i className="fa fa-heartbeat" aria-hidden="true"></i>
          <h4>COMMUNITY</h4>
        </Link>
        <Link to='/about' className='about-nav'>
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <h4>ABOUT</h4>
        </Link>
      </div>
    );
  }
}

export default NavMain;
