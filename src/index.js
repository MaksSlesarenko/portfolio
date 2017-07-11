import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './components/app'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/reset.css'
import './assets/css/style.css'
import './assets/scss/style.scss'

const target = document.querySelector( '#root' )

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);