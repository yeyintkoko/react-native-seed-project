import { createStore } from 'redux';
import { app } from './reducers';

let store = createStore(app);

// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// var { toggleDrawer } = require('./actions')
// store.dispatch(toggleDrawer(0));
// store.dispatch(toggleDrawer(1));

// unsubscribe();

export default store;
