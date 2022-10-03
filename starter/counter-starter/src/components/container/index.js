import PropTypes from "prop-types";
import Styles from "./Container.module.css";
const Container = (props) => {
  return <section className={Styles.container}>{props.children}</section>;
};

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
