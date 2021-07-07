import { ADD_CONTACT, DELETE_CONTACT } from "../types/phoneBookTypes";
import { v4 as uuidv4 } from "uuid";

const addContact = (name, phoneNum) => ({
  type: ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    phoneNum,
  },
});

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: {
    id,
  },
});

export { addContact, deleteContact };
