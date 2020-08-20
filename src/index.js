import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './i18n';

import setAuthToken from 'Utils/setAuthToken';
import crispEmailBinding from 'Utils/crispEmailBinding';

import ToTop from 'Components/misc/ToTop';

import reducers from './reducers';

import { BreakpointProvider, defaultQuery } from 'Components/misc/breakpoint';

import GraphCMSProvider from './services/graphcms';
import Intercom from './services/intercom';
import './css/index.scss';

window.$ = window.jQuery = require('jquery');
require('./js/bootstrap.min.js');

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

setAuthToken();
crispEmailBinding(store);
require('Utils/bindGa');

const Referrals = React.lazy(() => import('Components/Referrals/Referrals'));
const Header = React.lazy(() => import('Components/Header/Header'));
const Footer = React.lazy(() => import('Components/Footer'));
const NotFound = React.lazy(() => import('Components/NotFound/NotFound'));
const FAQ = React.lazy(() => import('Components/FAQ/FAQ'));
const About = React.lazy(() => import('Components/Home/About/About'));

const Home = React.lazy(() => import('Components/Home/Home'));
const TermsConditions = React.lazy(() => import('Components/TermsConditions/TermsConditions'));
const Privacy = React.lazy(() => import('Components/Privacy/Privacy'));
const Orders = React.lazy(() => import('Components/Accounts/Orders'));
const Order = React.lazy(() => import('Components/Order/Order'));

// If for some reason lang variable is not one of the available languages, change the language to en

ReactDOM.render(
  <GraphCMSProvider>
    <Provider store={store}>
      <BreakpointProvider queries={defaultQuery}>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <ToTop>
              <Referrals />
              <Header />

              <Switch>
                <Route exact path="/" render={props => <Home {...props} store={store} />} />
                <Route exact path="/terms-and-conditions" component={TermsConditions} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/order/:orderRef" component={Order} />
                <Route exact path="/orders/:orderRef?" component={Orders} />
                <Route exact path="/faqs/:id?" component={FAQ} />
                <Route exact path="/about" component={About} />
                <Route exact path="/not-found" component={NotFound} />
                <Route render={() => <Redirect to="/not-found" />} />
              </Switch>

              <Footer />
              <Intercom />
            </ToTop>
          </Suspense>
        </BrowserRouter>
      </BreakpointProvider>
    </Provider>
  </GraphCMSProvider>,
  document.getElementById('root')
);
