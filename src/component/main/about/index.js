import React from 'react';
import {Link} from 'react-router-dom';
import comingSoon from '../../../../assets/coming-soon.png';
import './_about.scss';

class About extends React.Component {

  render(){
    return(
      <div className='about'>
        <h2 className='headline'>
          ABOUT
        </h2>
        <h3>Let's go out for <i className="fa fa-coffee" aria-hidden="true"></i> and learn more about each other. </h3>
        <h3>Message me on <Link to='https://www.linkedin.com/in/sdmccoy/'       className='nav-icon' target='_blank'>
          <i className='fa fa-linkedin-square' aria-hidden='true'></i>
        </Link> to set it up!</h3>
        <h3>Here's a little taste of what makes me happy.</h3>
        <h2>Artificer</h2>
        <h5>Using that logic-based creativity to hand craft functioning art for others.</h5>
        <h2>Adventurer</h2>
        <h5>Harnessing the power of nature to connect on a thrilling level.</h5>
      </div>
    );
  }
}

export default About;
