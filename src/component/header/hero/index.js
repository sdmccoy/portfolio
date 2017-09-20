import React from 'react';

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Scott McCoy',
      title: 'Full-Stack Software Developer',
      heroPhoto: '../../../../assets/brain.jpg',
      quote: '"positive impacts with logic-based creativity"',
    };
  }
  render(){
    return(
      <div className='hero'>
        <h2 className='name'>{this.state.name}</h2>
        <h2 className='title'>{this.state.title}</h2>
        <img src={this.state.heroPhoto} />
        <h2 className='quote'>{this.state.quote}</h2>
      </div>
    );
  }
}

export default Hero;
