import React from 'react';
import {Link} from 'react-router-dom';
import comingSoon from '../../../../assets/coming-soon.png';
import coderDojoPhoto from '../../../../assets/coderdojo.png';
import * as meetup from '../../../lib/meetup.js';
import './_community.scss';

class Community extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      meetup: meetup,
    };
  }


  render(){
    console.log('comm state = ', this.state);
    return(
      <div className='community'>
        <h2 className='headline'>
          COMMUNITY
        </h2>
        <div className='volunteer-container'>
          <h3>Volunteer</h3>
          <img src={coderDojoPhoto} />
          <h4>Seattle CoderDojo</h4>
          <h5>" Teaching Kids to Code - One Saturday at a Time " <br/> <br/>
          When I'm not out climbing mountains or riding waves you can find me volunteering at Seattle CoderDojo. It's amazing to be a part of the growth of these young minds. Seeing the progression week after week with their projects is paving a clear path for their future in this tech-driven world.</h5>
          <button className='visit-site-button'>
            <Link to='https://www.seattlecoderdojo.com/' target='_blank'>
              <h6>Visit Site</h6>
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </Link>
          </button>
          <div className='community-border'></div>
          <div className='meetup-container'>
            <img className='meetup-logo' src={this.state.meetup.meetupLogo}/>
            <h5>Actively attending, learning, and contributing to these Meetups</h5>
            <img src={this.state.meetup.seattleJSHackersLogo}/>
            <img src={this.state.meetup.seattleReactJSLogo}/>
            <img src={this.state.meetup.newTechLogo}/>
            <img src={this.state.meetup.seattleSoftCraftLogo}/>
            <img src={this.state.meetup.nodeJSLogo}/>
            <img src={this.state.meetup.seattleJSLogo}/>
            <img src={this.state.meetup.hackerNewsLogo}/>
            <img src={this.state.meetup.opCodeLogo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
