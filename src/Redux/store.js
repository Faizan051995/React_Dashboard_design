// store.js
import { createStore } from 'redux';
import rootReducer from '../Redux/reducer'; // Create your root reducer

const store = createStore(rootReducer);

export default store;