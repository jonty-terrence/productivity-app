import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import * as Firebase from 'firebase'

import App from './components/App'
import reducers from './reducers'

const firebaseConfig = {
  apiKey: 'AIzaSyCr3u4ExzaPeuptrXoXX8nSz3ckr1aXQoE',
  authDomain: 'productivity-app-69.firebaseapp.com',
  databaseURL: 'https://productivity-app-69.firebaseio.com',
  projectId: 'productivity-app-69',
  storageBucket: 'productivity-app-69.appspot.com',
  messagingSenderId: '565104879869',
  appId: '1:565104879869:web:d3a3a248bb9b834c70b694'
}

const dataStore = Firebase.initializeApp(firebaseConfig)
export const db = dataStore.database()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
