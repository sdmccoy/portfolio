import React from 'react';
import {Link} from 'react-router-dom';
import './_navmain.scss';

class NavMain extends React.Component {

  render(){
    return(
      <div className='navmain'>
        <Link to='/projects' className='projects-icon'><p>Projects</p></Link>
        <Link to='/community' className='community-icon'><p>Community</p></Link>
        <Link to='/about' className='about-icon'><p>About</p></Link>
      </div>
    );
  }
}

export default NavMain;
