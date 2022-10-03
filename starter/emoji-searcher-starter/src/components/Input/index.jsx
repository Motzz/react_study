import PropTypes from "prop-types";

import styles from "./Input.module.css";

const Input = ({ onChange, value }) => {
  return <input className={styles.input} placeholder="Search" defaultValue={value} onChange={onChange} />;
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
