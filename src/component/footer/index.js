import React from 'react';
import footerLogo from '../../../assets/smallbrain.jpg';
import JSIcon from '../../../assets/devicons/javascript-original.svg';
import nodeIcon from '../../../assets/devicons/nodejs-original-wordmark.svg';
import reactIcon from '../../../assets/devicons/react-original-wordmark.svg';
import jQueryIcon from '../../../assets/devicons/jquery-original-wordmark.svg';
import HTML5Icon from '../../../assets/devicons/html5-original-wordmark.svg';
import CSS3Icon from '../../../assets/devicons/css3-original-wordmark.svg';
import sassIcon from '../../../assets/devicons/sass-original.svg';
import postgreSQLIcon from '../../../assets/devicons/postgresql-original-wordmark.svg';
import mongoDBIcon from '../../../assets/devicons/mongodb-original-wordmark.svg';
import webpackIcon from '../../../assets/devicons/webpack-original-wordmark.svg';

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
        <div className='lang-icon-container'>
          <img src={JSIcon} />
          <img src={nodeIcon} />
          <img src={reactIcon} />
          <img src={jQueryIcon} />
          <img src={HTML5Icon} />
          <img src={CSS3Icon} />
          <img src={sassIcon} />
          <img src={postgreSQLIcon} />
          <img src={mongoDBIcon} />
          <img src={webpackIcon} />
        </div>
        <img className='footer-photo' src={this.state.footerLogo} />
        <h2 className='footer-signature'>{this.state.footerSignature}</h2>
      </div>
    );
  }
}

export default Footer;
