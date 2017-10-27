import React from 'react';
import {Link} from 'react-router-dom';
import './_contact-form.scss';

class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }



  render(){
    return(
      <div className='contact-container'>
        <h2 className='headline'>
          CONTACT
        </h2>
        <h4>Peruse, Connect, and Message!</h4>
        <div className='linkedin-container'>
          <Link to='https://www.linkedin.com/in/sdmccoy/'       className='nav-icon' target='_blank'>
            <i className='fa fa-linkedin-square' aria-hidden='true'></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default ContactForm;
