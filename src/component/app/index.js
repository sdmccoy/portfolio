import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from '../header/navbar';
import Hero from '../header/hero';
import ContactForm from '../main/contact-form';
import NavMain from '../main/navmain';
import Footer from '../footer';
import Projects from '../main/projects';

import '../../style/_main.scss';

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <div className='app'>
          <div className='header'>
            <NavBar />
            <Hero />
          </div>
          <div className='main'>
            <Route exact path='/' component={NavMain} />
            <Route exact path='/projects' component={Projects} />
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// <ContactForm />
class Dashboard extends React.Component {
  render(){
    return(
      <div className='dashboard-container'>
      </div>
    );
  }
}
