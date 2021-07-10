import { createStore, combineReducers } from "redux";
import phoneBookReducer from "./reducers/phoneBookReducer";

const rootReducer = combineReducers({ contacts: phoneBookReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
