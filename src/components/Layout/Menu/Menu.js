import PropTypes from "prop-types";
import styles from "./Menu.module.css";

const propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Menu({ children }) {
  return <div className={styles.menu}>{children}</div>;
}

Menu.propTypes = propTypes;
