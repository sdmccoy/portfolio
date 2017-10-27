import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as util from '../../../lib/util.js';
import * as devIcon from '../../../lib/dev-icons.js';
import * as projectActions from '../../../actions/project.js';
import {projects} from '../../../lib/projects.js';
import './_projects.scss';


class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: this.props.projects,
      showProjectDetails: false,
    };
    this.handleProjectDetails = this.handleProjectDetails.bind(this);
  }

  componentWillMount(){
    this.props.projectSet(projects);
  }

  handleProjectDetails(){
    this.state.showProjectDetails === false ?
      this.setState({showProjectDetails: true}) : undefined;
    this.state.showProjectDetails === true ?
      this.setState({showProjectDetails: false}) : undefined;
  }

  render(){
    return(
      <div className='projects'>
        <h2 className='headline'>
          PROJECTS
        </h2>
        {this.props.projects.map((project, i) => {
          return <div className='project-container' key={i}>
            <div className='main-details'>
              <div className='device-photo'>
                <img src={project.photo} />
              </div>
              <div className='snapshot'>
                <h2 className='title'>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className='button-bar'>
                <button className='visit-site-button'>
                  <Link to={project.websiteURL} target='_blank'>
                    <h6>Visit Site</h6>
                    <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                  </Link>
                </button>
                <button className='details-button' onClick={this.handleProjectDetails}>
                  <h6>Details</h6>
                  <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className='clear-float'></div>
            {util.renderIf(this.state.showProjectDetails,
              <div className='details'>
                <ul className='feature-list'>
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <li>
                    {project.featureOne}
                  </li>
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <li>
                    {project.featureTwo}
                  </li>
                  <i className="fa fa-dot-circle-o" aria-hidden="true"></i>
                  <li>
                    {project.featureThree}
                  </li>
                </ul>
                <div className='devicon-container'>
                  <img src={project.devIcons[0]} />
                  <img src={project.devIcons[1]} />
                  <img src={project.devIcons[2]} />
                  <img src={project.devIcons[3]} />
                  <img src={project.devIcons[4]} />
                </div>
                <button className='close-details-button' onClick={this.handleProjectDetails}>
                  <h6>Close</h6>
                  <i className="fa fa-times-circle" aria-hidden="true" >
                  </i>
                </button>
              </div>
            )}
            <div className='project-border'></div>
          </div>;
        })}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  projectSet: projects => dispatch(projectActions.projectSet(projects)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
