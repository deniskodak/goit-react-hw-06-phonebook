import { ADD_CONTACT, DELETE_CONTACT } from "../types/phoneBookTypes";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

function notesReducer(state = initialState, action) {
    const { items } = state.contacts;

  switch (action.type) {
      case ADD_CONTACT:
          const existContact = findContact(state.contacts.items, action.payload.name);
          
         return  existContact
        ? alert(`${action.name} is already in contacts`)
        : [...state, action.payload];
      
    case DELETE_CONTACT:
      return state.filter((note) => note.id !== action.payload.id);

    default:
      return state;
  }
}


const findContact = (array, name) => {
    return array.some(
      (oldContact) => oldContact.name.toLowerCase() === name.toLowerCase()
);