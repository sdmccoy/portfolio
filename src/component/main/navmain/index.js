import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as projectActions from '../../../actions/project.js';
import {projects} from '../../../lib/projects.js';
import './_navmain.scss';

class NavMain extends React.Component {
  constructor(props){
    super(props);
  }

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

const mapDispatchToProps = dispatch => ({
  projectSet: projects => dispatch(projectActions.projectSet(projects)),
});

export default connect(null, mapDispatchToProps)(NavMain);
