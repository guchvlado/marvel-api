import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import AppHeader from '../appHeader/AppHeader';

import './App.scss';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
const SingleCharacterPage = lazy(() => import('../pages/SingleCharacterPage'));
const Page404 = lazy(() => import('../pages/404'));

const App = () => {

  return (
    <Router>
      <div className="App">
        <AppHeader/>

        <Suspense fallback={<Spinner/>}>
          <Switch>
            <Route exact path='/'>
              <MainPage/>
            </Route>

            <Route exact path='/comics'>
              <ComicsPage/>
            </Route>

            <Route path='/comics/:comicId'>
              <SingleComicPage/>
            </Route>

            <Route path='/characters/:charId'>
              <SingleCharacterPage/>
            </Route>

            <Route path='*'>
              <Page404/>
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
