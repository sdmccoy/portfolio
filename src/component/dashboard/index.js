import React from 'react';
import NavBar from '../header/navbar';
import Hero from '../header/hero';
import ContactForm from '../main/contact-form';
import NavMain from '../main/navmain';
import Footer from '../footer';

// <ContactForm />
class Dashboard extends React.Component {
  render(){
    return(
      <div className='dashboard-container'>
        <div className='header'>
          <NavBar />
          <Hero />
        </div>
        <div className='main'>
          <NavMain />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
