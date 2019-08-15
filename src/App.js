import React from 'react';
import ContadorComponent from './components/ContadorComponent';
import configureStore, { ConfigureStore } from './configs/configureStore';
import {/* Link, NavLink,*/ Router, Route, Redirect, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import { linksRouter } from './configs/urlsNav';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FormPruebaVic from './components/FormPruebaVic';

const store = ConfigureStore();
const hashHistory = createHashHistory();

function App() {
  return (
    <div className="App">
      <div>
        <Provider store={store}>
          <BrowserRouter history={hashHistory}>
            <HeaderComponent />
            <Switch>
              <Route exact path={"/" + linksRouter.enlaceHome} component={({ match }) => <HomeComponent match={match} />} />
              <Route exact path={"/" + linksRouter.enlaceDos} component={({ match }) => <ContadorComponent match={match} />} />
              <Route exact path={"/" + linksRouter.contador} component={({ match }) => <ContadorComponent match={match} />} />
              <Route exact path={"/" + linksRouter.enlaceVic} component={({ match }) => <FormPruebaVic match={match} />} />

              <Redirect to={"/" + linksRouter.enlaceHome} />
            </Switch>
            <FooterComponent />
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
}

export default App;
