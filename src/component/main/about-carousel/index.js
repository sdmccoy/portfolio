import React from 'react';
import * as about from '../../../lib/about.js';
//style
import './_about-carousel.scss';

class AboutCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      artPhoto: about.artificer[0].photo,
      artTitle: about.artificer[0].name,
      artCurrentActiveIndex: 0,
      advPhoto: about.adventurer[0].photo,
      advTitle: about.adventurer[0].name,
      advCurrentActiveIndex: 0,
    };
    this.handleActiveArtItem = this.handleActiveArtItem.bind(this);
    this.handleActiveAdvItem = this.handleActiveAdvItem.bind(this);
    this.handleSlideToggle = this.handleSlideToggle.bind(this);
  }

  handleSlideToggle(direction, category){

    let currentIndex = category === 'art' ?
      this.state.artCurrentActiveIndex
      :
      this.state.advCurrentActiveIndex;

    let slideLength = category === 'art' ?
      about.artificer.length - 1
      :
      about.adventurer.length - 1;

    let newIndex = 0;

    if (currentIndex === 0){
      newIndex = direction === 'right' ?
        currentIndex + 1
        :
        slideLength;
    } else if (currentIndex === slideLength){
      newIndex = direction === 'right' ?
        0
        :
        slideLength - 1;
    } else{
      newIndex = direction === 'right' ?
        currentIndex + 1
        :
        currentIndex - 1;
    }
    category === 'art' ?
      this.setState({
        artPhoto: about.artificer[newIndex].photo,
        artTitle: about.artificer[newIndex].name,
        artCurrentActiveIndex: newIndex,
      })
      :
      this.setState({
        advPhoto: about.adventurer[newIndex].photo,
        advTitle: about.adventurer[newIndex].name,
        advCurrentActiveIndex: newIndex,
      });
  }

  handleActiveArtItem(activeItem, i){
    this.setState({
      artPhoto: activeItem.photo,
      artTitle: activeItem.name,
      artCurrentActiveIndex: i,
    });
  }

  handleActiveAdvItem(activeItem, i){
    this.setState({
      advPhoto: activeItem.photo,
      advTitle: activeItem.name,
      advCurrentActiveIndex: i,
    });
  }


  render(){
    let chevronLeft = '<';
    let chevronRight = '>';
    return(
      <div className='carousel-container'>
        <h4>Below are some hobbies of mine that make me happy. A great conversation starter!</h4>
        <h3>Artificer</h3>
        <h5>Using that logic-based creativity to hand craft functioning art for others.</h5>
        <div className='active-picture'>
          <div className='toggle-left'
            onClick={() => this.handleSlideToggle('left', 'art')}
          >
            {chevronLeft}
          </div>
          <img src={this.state.artPhoto} />
          <div className='toggle-right'
            onClick={() => this.handleSlideToggle('right', 'art')}
          >
            {chevronRight}
          </div>
          <h3 className='active-title'>
            {this.state.artTitle}
          </h3>
        </div>
        <div className='clear-float'></div>
        <div className='thumbnail-container'>
          {about.artificer.map((art, i) => {
            return <div key={i} className='artificer-item'
              onClick={() => this.handleActiveArtItem(art, i)}
            >
              <img src={art.photo} />
            </div>;
          })
          }
        </div>
        <div className='clear-float'></div>
        <div className='border'></div>
        <h2>Adventurer</h2>
        <h5>Harnessing the power of nature to connect on a thrilling level.</h5>
        <div className='active-picture'>
          <div className='toggle-left'
            onClick={() => this.handleSlideToggle('left', 'adv')}
          >
            {chevronLeft}
          </div>
          <img src={this.state.advPhoto} />
          <div className='toggle-right'
            onClick={() => this.handleSlideToggle('right', 'adv')}
          >
            {chevronRight}
          </div>
          <h3 className='active-title'>{this.state.advTitle}</h3>
        </div>
        <div className='clear-float'></div>
        <div className='thumbnail-container'>
          {about.adventurer.map((adv, i) => {
            return <div key={i} className='adventurer-item'
              onClick={() => this.handleActiveAdvItem(adv, i)}
            >
              <img src={adv.photo} />
            </div>;
          })
          }
        </div>
      </div>
    );
  }
}

export default AboutCarousel;
