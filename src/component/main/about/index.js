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
        <h3>Still pondering, page is</h3>
        <img src={comingSoon} />
      </div>
    );
  }
}

export default About;
