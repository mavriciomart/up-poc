import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './../Home';
import './index.css';
import { Voicemails } from '../Voicemails';
import { Faxes } from './../Faxes';

const Application = () => (
  <BrowserRouter basename='/user-portal'>
    <div
      className='application'
      id='user-portal'
      style={{
        display: 'flex',
        'flex-direction': 'column',
        width: '100%',
        height: '100%'
      }}
    >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/voicemails' component={Voicemails} />
        <Route exact path='/faxes' component={Faxes} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Application;
