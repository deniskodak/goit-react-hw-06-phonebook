import React from "react";
import Contact from "../Contact";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/phoneBookActions";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
        const { id } = contact;
        return (
          <Contact
            key={id}
            contact={contact}
            onDelete={() => deleteContact(id)}
          />
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
  deleteContact: PropTypes.func.isRequired,
};

const getFilteredList = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }, props) => ({
  contacts: getFilteredList(items, filter),
});
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
