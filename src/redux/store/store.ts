import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import reducer from '../reducers/reducer';

const middlewares = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;