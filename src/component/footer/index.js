import React from 'react';
import footerLogo from '../../../assets/smallbrain.jpg';


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
        <img className='footer-photo' src={this.state.footerLogo} />
        <h2 className='footer-signature'>{this.state.footerSignature}</h2>
      </div>
    );
  }
}

export default Footer;
