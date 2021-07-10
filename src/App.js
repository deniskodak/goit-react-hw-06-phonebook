import React from "react";
import { Component } from "react/cjs/react.production.min";
import ContactsList from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";
import { CSSTransition } from "react-transition-group";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="container-fade"
        >
          <section className="app-section">
            <h1 style={{ marginBottom: "15px" }}>Phonebook</h1>
            <Form />
            <h2 style={{ marginBottom: "15px", marginTop: "15px" }}>
              Contacts
            </h2>
            <Filter />
          </section>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="container-next-fade"
        >
          <section className="app-section">
            <ContactsList />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
