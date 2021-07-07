import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onFilter }) => (
  <label className={styles.label}>
    {" "}
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={value}
      autoComplete="off"
      onChange={onFilter}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
