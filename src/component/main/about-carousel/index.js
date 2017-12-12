import React from 'react';
import * as about from '../../../lib/about.js';

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
    console.log('direction = ', direction);
    console.log('category = ', category);
    console.log('this.state = ', this.state);
    let currentIndex = category === 'art' ?
      this.state.artCurrentActiveIndex
      :
      this.state.advCurrentActiveIndex;
    console.log('cur index  = ', currentIndex);

    let slideLength = category === 'art' ?
      about.artificer.length - 1
      :
      about.adventurer.length - 1;
    console.log('slide lenght = ', slideLength);

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
    console.log('newIndex after = ', newIndex);
    console.log('cur index after = ', currentIndex);
    console.log('about.artificer  = ', about.artificer);
    console.log('about.artificer[newindex]  = ', about.artificer[newIndex]);
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
    return(
      <div className='carousel-container'>
        <h3>Here is a little taste of what makes me happy.</h3>
        <h2>Artificer</h2>
        <h5>Using that logic-based creativity to hand craft functioning art for others.</h5>
        <div className='active-picture'>
          <div className='toggle-left'
            onClick={() => this.handleSlideToggle('left', 'art')}
          >
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <img src={this.state.artPhoto} />
          <h3>{this.state.artTitle}</h3>
          <div className='toggle-right'
            onClick={() => this.handleSlideToggle('right', 'art')}
          >
            <i className="fa fa-chevron-right"    aria-hidden="true"></i>
          </div>
        </div>
        {about.artificer.map((art, i) => {
          return <div key={i} className='artificer-container'
            onClick={() => this.handleActiveArtItem(art, i)}
          >
            <h3 className='title'>{art.name}</h3>
            <img src={art.photo} />
          </div>;
        })
        }
        <h2>Adventurer</h2>
        <h5>Harnessing the power of nature to connect on a thrilling level.</h5>
        <div className='active-picture'>
          <img src={this.state.advPhoto} />
          <h3>{this.state.advTitle}</h3>
        </div>
        {about.adventurer.map((adv, i) => {
          return <div key={i} className='adventure-container'
            onClick={() => this.handleActiveAdvItem(adv, i)}
          >
            <h3 className='title'>{adv.name}</h3>
            <img src={adv.photo} />
          </div>;
        })
        }
      </div>
    );
  }
}

export default AboutCarousel;
