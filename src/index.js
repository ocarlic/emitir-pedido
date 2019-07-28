import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.css';
import App from './app';
import SucessForm from './page/sucessForm';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={routerProps => <App {...routerProps} />} />
      <Route path="/sucess" render={() => <SucessForm />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
