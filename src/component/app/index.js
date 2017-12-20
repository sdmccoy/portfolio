import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import appStoreCreate from '../../lib/app-store-create.js';
import NavBar from '../header/navbar';
import Hero from '../header/hero';
import ContactForm from '../main/contact-form';
import NavMain from '../main/navmain';
import Footer from '../footer';
import Projects from '../main/projects';
import About from '../main/about';
import Community from '../main/community';
import '../../style/_main.scss';

const store = appStoreCreate();

class App extends React.Component {


  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div className='app'>
            <div className='header'>
              <NavBar />
              <Hero />
            </div>
            <div className='main'>
              <Switch>
                <Route exact path='/' component={NavMain} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/community' component={Community} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={ContactForm} />
                <Route component={NavMain} />
              </Switch>
            </div>
            <div className='footer'>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
