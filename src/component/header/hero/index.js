import React from 'react';
import heroPhoto from '../../../../assets/brainsmall.png';
import './_hero.scss';

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Scott McCoy',
      title: 'Full-Stack Software Developer',
      heroPhoto: heroPhoto,
      quote: '"positive impacts with logic-based creativity"',
    };
  }
  render(){
    return(
      <div className='hero'>
        <div className='name-title'>
          <h2 className='name'>{this.state.name}</h2>
          <h4 className='title'>{this.state.title}</h4>
        </div>
        <div className='hero-photo'>
          <img src={this.state.heroPhoto} />
        </div>
        <h6 className='quote'>{this.state.quote}</h6>
      </div>
    );
  }
}

export default Hero;
