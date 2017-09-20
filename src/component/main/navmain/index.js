import React from 'react';
import {Link} from 'react-router-dom';

class NavMain extends React.Component {

  render(){
    return(
      <div className='navmain'>
        <Link to='/projects' className='projects-icon'>Projects</Link>
        <Link to='/community' className='community-icon'>Community</Link>
        <Link to='/about' className='about-icon'>About</Link>
      </div>
    );
  }
}

export default NavMain;
