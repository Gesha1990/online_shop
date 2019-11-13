import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import   thunkMiddleware from 'redux-thunk';
import productsReducer from "./productsReducer";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import commentsReducer from "./commentsReducer";


let reducers = combineReducers({
  productsPage: productsReducer,
  commentsPage: commentsReducer,
  auth: authReducer,
  form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
