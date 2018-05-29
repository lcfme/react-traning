import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import autoSaveSessionAfterDispatch from './utils/redux-auto-save-session-after-dispatch';
import initStore from './initStore';

const store = createStore(reducer, initStore, applyMiddleware(thunk, autoSaveSessionAfterDispatch({ log: true, namespace: '__GLOBAL_STORE__' })));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
// registerServiceWorker();
