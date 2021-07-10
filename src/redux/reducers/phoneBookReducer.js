import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FILTER_CONTACTS,
} from "../types/phoneBookTypes";
import { combineReducers } from "redux";

const contacts = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter((note) => note.id !== action.payload.id);

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case FILTER_CONTACTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
