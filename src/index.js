import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import App from './App'
import rootReducer from './reducers/index'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider> 
, document.getElementById('root'))
registerServiceWorker()
