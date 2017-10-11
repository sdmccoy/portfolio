import React from 'react';
import comingSoon from '../../../../assets/coming-soon.png';
import './_community.scss';

class Community extends React.Component {

  render(){
    return(
      <div className='community'>
        <h2 className='headline'>
          COMMUNITY
        </h2>
        <h3>Out helping the community, page is</h3>
        <img src={comingSoon} />
      </div>
    );
  }
}

export default Community;
