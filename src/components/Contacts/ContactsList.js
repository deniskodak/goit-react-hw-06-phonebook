import React from "react";
import Contact from "../Contact";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
        const { id } = contact;
        return (
          <Contact key={id} contact={contact} onDelete={() => onDelete(id)} />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
