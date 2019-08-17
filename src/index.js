import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import thunk from redux-thunk to be able to do api requests
import thunk from 'redux-thunk';

//import createStore and combineReducers from redux package
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

//import Provider from react-redux package to give our app access to the store
import {Provider} from 'react-redux';

//import reducers procut and user reducers
import productsReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
*Create store can take 2 more optional arguments
*the 1st argument is the reducer
*the 2nd argument help us to set an initial state and prepopulate our store with datas.
*the last argument contents all the store enhancers like middlewares and redux dev tools
*/
const store = createStore(
        rootReducer,
        {
            products: [{ name: 'iPhone' }],
            user: 'Michael'
        },
        allStoreEnhancers
    );

ReactDOM.render(
    <Provider store={store}>
        <App aRandomProps='whatever'/>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
