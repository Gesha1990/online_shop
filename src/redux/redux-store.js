import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import   thunkMiddleware from 'redux-thunk';
import productsReducer from "./productsReducer";
import { reducer as formReducer } from 'redux-form';
import authReducer from "./authReducer";
import commentsReducer from "./commentsReducer";

function saveToLocalStorage(state) {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
    return undefined
  }
}


let reducers = combineReducers({
  productsPage: productsReducer,
  commentsPage: commentsReducer,
  auth: authReducer,
  form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(reducers,
  persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;
