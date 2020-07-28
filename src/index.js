import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import './i18n';
import i18n from 'i18next';

import setAuthToken from 'Utils/setAuthToken';

import ToTop from 'Components/misc/ToTop';

import reducers from './reducers';

import { BreakpointProvider, defaultQuery } from 'Components/misc/breakpoint';

import GraphCMSProvider from './services/graphcms';
import './css/index.scss';

window.$ = window.jQuery = require('jquery');
require('./js/bootstrap.min.js');

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

setAuthToken();
require('Utils/bindGa');

const Referrals = React.lazy(() => import('Components/Referrals/Referrals'));
// const Header = React.lazy(() => import('Components/Header/Header'));
// const Footer = React.lazy(() => import('Components/Footer'));
const NotFound = React.lazy(() => import('Components/NotFound/NotFound'));
// const FAQ = React.lazy(() => import('Components/FAQ2/FAQ'));

const Home = React.lazy(() => import('Components/Home/Home'));
const TermsConditions = React.lazy(() => import('Components/TermsConditions/TermsConditions'));
const Privacy = React.lazy(() => import('Components/Privacy/Privacy'));

const Orders = React.lazy(() => import('Components/Accounts/Orders'));
const Order = React.lazy(() => import('Components/Order/Order'));

const languages = ['en', 'de', 'ru'];
let lang = i18n.language || window.localStorage.i18nextLng || 'en';

// If for some reason lang variable is not one of the available languages, change the language to en
if (!languages.includes(lang)) {
  lang = 'en';
  i18n.changeLanguage('en');
}

const NotFoundRedirect = () => {
  const { pathname } = useLocation();

  // Comment: Redirects urls like /order/any to /en/order/any
  if (!languages.includes(pathname.split('/')[1])) return <Redirect to={`/${lang}${pathname}`} />;

  return <Redirect to={`/${lang}/not-found`} />;
};

ReactDOM.render(
  <GraphCMSProvider>
    <Provider store={store}>
      <BreakpointProvider queries={defaultQuery}>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <ToTop>
              <Referrals />
              {/* <Header /> */}

              <Switch>
                <Route exact path="/" render={props => <Redirect to={`/${lang}${props.location.search}`} />} />
                <Route exact path="/:lang(en|de|ru)/terms-and-conditions" component={TermsConditions} />
                <Route exact path="/:lang(en|de|ru)/privacy" component={Privacy} />
                <Route exact path="/:lang(en|de|ru)/order/:orderRef" component={Order} />
                <Route exact path="/:lang(en|de|ru)/orders/:orderRef?" component={Orders} />
                <Route exact path="/:lang(en|de|ru)" render={props => <Home {...props} store={store} />} />
                <Route exact path="/:lang(en|de|ru)/not-found" component={NotFound} />
                <Route component={NotFoundRedirect} />
              </Switch>

              {/* <Footer /> */}
            </ToTop>
          </Suspense>
        </BrowserRouter>
      </BreakpointProvider>
    </Provider>
  </GraphCMSProvider>,
  document.getElementById('root')
);
