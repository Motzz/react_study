import PropTypes from "prop-types";
import styles from "./Info.module.css";
const Info = ({ todosLength, totalCounts, onDelete }) => {
  return (
    <div className="info">
      <div className="info-total">
        <p>{`Total List: ${todosLength}`}</p>
      </div>
      <div className="info-total">
        <p>{`Total Counts: ${totalCounts}`}</p>
      </div>
      <button onClick={onDelete} className="delete-all-button">
        Delete all List
      </button>
    </div>
  );
};

Info.propTypes = {
  todosLength: PropTypes.number,
  totalCounts: PropTypes.func,
  onDelete: PropTypes.func,
};
export default Info;
