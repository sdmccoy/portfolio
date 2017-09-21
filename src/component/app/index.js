import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Dashboard from '../dashboard';
import '../../style/_main.scss';

class App extends React.Component {

  render(){
    return(
      <div className='app'>
        <BrowserRouter>
          <div className='route-container'>
            <Route exact path='/' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
