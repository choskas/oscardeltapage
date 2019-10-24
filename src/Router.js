import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home'

import './App.css';
import Projects from './components/Projects';

const Router = (user) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </BrowserRouter>
);

export default Router;