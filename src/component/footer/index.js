import React from 'react';
import './_footer.scss';
//assets
import footerLogo from '../../../assets/brainsmall.png';
import * as devIcon from '../../lib/dev-icons.js';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      footerLogo: footerLogo,
      footerSignature: 'Crafted by Scott McCoy',
    };
  }

  render(){
    return(
      <div className='footer-container'>
        <div className='devicon-container'>
          <img src={devIcon.JSIcon} />
          <img src={devIcon.nodeIcon} />
          <img src={devIcon.reactIcon} />
          <img src={devIcon.jQueryIcon} />
          <img src={devIcon.HTML5Icon} />
          <img src={devIcon.CSS3Icon} />
          <img src={devIcon.sassIcon} />
          <img src={devIcon.postgreSQLIcon} />
          <img src={devIcon.mongoDBIcon} />
          <img src={devIcon.webpackIcon} />
        </div>
        <div className='footer-bottom'>
          <h6 className='footer-signature'>{this.state.footerSignature}</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
