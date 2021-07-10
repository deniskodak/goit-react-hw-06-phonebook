import React from "react";
import { Component } from "react/cjs/react.production.min";
import ContactsList from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  // findContact = (array, name) => {
  //   return array.some(
  //     (oldContact) => oldContact.name.toLowerCase() === name.toLowerCase()
  //   );
  // };
  // addContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };

  //   const existContact = this.findContact(this.state.contacts, contact.name);

  //   existContact
  //     ? alert(`${contact.name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  // };

  render() {
    return (
      <>
        <h1 style={{ marginLeft: 30, marginTop: 0, marginBottom: 0 }}>
          Phonebook
        </h1>
        <Form />

        <h2 style={{ marginLeft: 30, marginTop: 0, marginBottom: 0 }}>
          Contacts
        </h2>
        <Filter />
        <ContactsList />
      </>
    );
  }
}

export default App;
