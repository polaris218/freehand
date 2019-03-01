import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Fire from './component/config/Fire';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({
            getFirestore,
            getFirebase
        })),
        reduxFirestore(Fire),
        reactReduxFirebase(Fire),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
