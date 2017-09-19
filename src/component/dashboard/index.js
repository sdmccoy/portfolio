import React from 'react';
import NavBar from '../header/navbar';
import Hero from '../header/hero';
import ContactForm from '../main/contact-form';
import NavBody from '../main/navbody';
import Footer from '../footer';

// <div className='main'>
// <ContactForm />
// <NavBody />
// </div>
// <div className='footer'>
// <Footer />
// </div>
// <Hero />
class Dashboard extends React.Component {
  render(){
    return(
      <div className='dashboard-container'>
      this is test dash
        <div className='header'>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
