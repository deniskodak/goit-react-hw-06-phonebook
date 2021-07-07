import { createStore } from "redux";
const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = {}, action) => state;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;