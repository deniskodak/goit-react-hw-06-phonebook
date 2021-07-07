import React from "react";
import { Component } from "react/cjs/react.production.min";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState(() => ({ contacts: parsedContacts }));
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChange = (e) => {
    const name = e.target.name;

    this.setState(() => ({
      [name]: e.target.value,
    }));
  };

  findContact = (array, name) => {
    return array.some(
      (oldContact) => oldContact.name.toLowerCase() === name.toLowerCase()
    );
  };
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    const existContact = this.findContact(this.state.contacts, contact.name);

    existContact
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  removeContact = (idToCompare) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToCompare),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    console.log(...contacts);
    return (
      <>
        <h1 style={{ marginLeft: 30, marginTop: 0, marginBottom: 0 }}>
          Phonebook
        </h1>
        <Form onSubmit={this.addContact} />

        <h2 style={{ marginLeft: 30, marginTop: 0, marginBottom: 0 }}>
          Contacts
        </h2>
        <Filter value={filter} onFilter={this.handleChange} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.removeContact}
        />
      </>
    );
  }
}

export default App;
