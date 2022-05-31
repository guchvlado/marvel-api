import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import MainPage from '../pages/MainPage';
import ComicsPage from '../pages/ComicsPage';


import './App.scss';


const App = () => {

  return (
    <Router>
      <div className="App">
        <AppHeader/>

        <Switch>
          <Route exact path='/'>
            <MainPage/>
          </Route>

          <Route exact path='/comics'>
            <ComicsPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
