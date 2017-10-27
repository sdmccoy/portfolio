import React from 'react';
import comingSoon from '../../../../assets/coming-soon.png';
import './_about.scss';

class About extends React.Component {

  render(){
    return(
      <div className='about'>
        <h2 className='headline'>
          ABOUT
        </h2>
        <h3>Let's go out for <i className="fa fa-coffee" aria-hidden="true"></i> and see what makes each other tick. Otherwise, page is</h3>
        <img src={comingSoon} />
      </div>
    );
  }
}

export default About;
