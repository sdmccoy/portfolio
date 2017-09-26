import React from 'react';
import footPhoto from '../../../assets/smallbrain.jpg';


class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      footerPhoto: footPhoto,
      footerSignature: 'Crafted by Scott McCoy',
    };
  }

  render(){
    return(
      <div className='footer-container'>
        <img className='footer-photo' src={this.state.footerPhoto} />
        <h2 className='footer-signature'>{this.state.footerSignature}</h2>
      </div>
    );
  }
}

export default Footer;
