import React from 'react';
import * as util from '../../../lib/util.js';
import * as devIcon from '../../../lib/dev-icons.js';
import './_projects.scss';
//remove after creating object and icon vars
import sparkleMonkeyPhoto from '../../../../assets/project-photo-sparklemonkey-medium.png';

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showProjectDetails: false,
    };
    this.handleProjectDetails = this.handleProjectDetails.bind(this);
  }


  handleProjectDetails(){
    this.state.showProjectDetails === false ?
      this.setState({showProjectDetails: true}) : undefined;
    this.state.showProjectDetails === true ?
      this.setState({showProjectDetails: false}) : undefined;
  }
  //build static structure to style, then make object module loop through
  render(){

    return(
      <div className='projects'>
        <h2 className='headline'>
          Projects
        </h2>
        <div className='device-photo'>
          <img src={sparkleMonkeyPhoto} />
        </div>
        <div className='snapshot'>
          <h2 className='title'>Sparkle Monkey</h2>
          <h6 className='brief'>Brief :</h6>
          <p>Spicy jalapeno bacon ipsum dolor amet shankle chuck filet mignon drumstick ground round chicken pig pork tail cow salami porchetta boudin prosciutto jowl. Sausage ham hock tongue ribeye, turducken rump pancetta hamburger alcatra pork chop salami. Meatball boudin biltong ground round frankfurter landjaeger pig. Chicken pork loin chuck, boudin salami beef ribs short ribs venison brisket pork chop ham. Tail capicola tri-tip pork pork chop, pork belly alcatra tongue ground round kielbasa fatback shank bacon kevin. Shankle pastrami tri-tip corned beef pork loin pork belly doner leberkas prosciutto capicola cow jerky.</p>
        </div>
        <div className='button-bar'>
          <button className='visit-site-button'>
            <h6>Visit Site</h6>
            <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </button>
          <button className='details-button' onClick={this.handleProjectDetails}>
            <h6>Details</h6>
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </button>
        </div>
        {util.renderIf(this.state.showProjectDetails,
          <div className='details'>
            <ul className='feature-list'>
              <li>feature one</li>
              <li>feature two</li>
              <li>feature three</li>
            </ul>
            <i onClick={this.handleProjectDetails}
              className="fa fa-times-circle" aria-hidden="true" >
            </i>
            <div className='devicon-container'>
              <img src={devIcon.JSIcon} />
              <img src={devIcon.nodeIcon} />
              <img src={devIcon.jQueryIcon} />
              <img src={devIcon.HTML5Icon} />
              <img src={devIcon.CSS3Icon} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
