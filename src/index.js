import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './containers/App';
// Redux
import { Provider } from 'react-redux';
import { store } from './storeConfig/store';

// Let's mount the App 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);