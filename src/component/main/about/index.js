import React from 'react';
import {Link} from 'react-router-dom';
import comingSoon from '../../../../assets/coming-soon.png';
import AboutCarousel from '../about-carousel';
import './_about.scss';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };

  }

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
        <AboutCarousel />
      </div>
    );
  }
}

export default About;
