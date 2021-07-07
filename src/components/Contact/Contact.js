import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;
  return (
    <li className={styles.item}>
      {name}: {number}
      <button className={styles.button} type="button" onClick={onDelete}>
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
