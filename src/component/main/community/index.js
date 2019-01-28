import React from 'react';
import {Link} from 'react-router-dom';
import coderDojoPhoto from '../../../../assets/coderdojo.png';
import hackForGoodPhoto from '../../../../assets/hack-for-good.png';
import * as meetup from '../../../lib/meetup.js';
import './_community.scss';

class Community extends React.Component {

  render(){
    return(
      <div className='community'>
        <h2 className='headline'>
          COMMUNITY
        </h2>
        <div className='volunteer-container'>
          <h3>Volunteer</h3>
          <img src={hackForGoodPhoto} />
          <h4>Microsoft: Hack for Good</h4>
          <h5>Integrated a cloud based video-to-text transcriptor in Grace Children's Foundation application. A solution for communication issues with doctors and children in need of diagnosis</h5>
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
            <img className='meetup-logo' src={meetup.meetupLogo}/>
            <h5>Actively attending, learning, and contributing to these Meetups</h5>
            <img src={meetup.seattleJSHackersLogo}/>
            <img src={meetup.seattleReactJSLogo}/>
            <img src={meetup.newTechLogo}/>
            <img src={meetup.seattleSoftCraftLogo}/>
            <img src={meetup.nodeJSLogo}/>
            <img src={meetup.seattleJSLogo}/>
            <img src={meetup.hackerNewsLogo}/>
            <img src={meetup.opCodeLogo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
