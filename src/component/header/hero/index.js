import React from 'react';
import heroPhoto from '../../../../assets/brainmedium.png';
import './_hero.scss';

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Scott McCoy',
      title: 'Full-Stack Software Developer',
      heroPhoto: heroPhoto,
      quote: 'Positive impacts with logic-based creativity',
    };
  }
  render(){
    return(
      <div className='hero'>
        <div className='hero-top'>
          <h2 className='name'>{this.state.name}</h2>
          <h4 className='title'>{this.state.title}</h4>
        </div>
        <div className='hero-bottom-container'>
          <div className='hero-photo'>
            <img src={this.state.heroPhoto} />
          </div>
          <div className='blockquote-container'>
            <blockquote className='blockquote'>
              <div className='left-quote'>
              </div>
              <p className='quote'>{this.state.quote}</p>
              <div className='right-quote'>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
