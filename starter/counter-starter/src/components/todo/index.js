import PropTypes from "prop-types";
import classNames from "classnames";
import plusIcon from "../../assets/plus-icon.svg";
import minusIcon from "../../assets/minus-icon.svg";
import styles from "./Todo.module.css";
const todo = (props) => {
  return (
    <div className="todos">
      {/* untuk loop array?? */}
      {props.todos.map((parameterNamaTodo, index, arr) => {
        // selema length ga sama sama index maka true misal length 3 != 0+1 kan false, begitu seterusnya
        return (
          <div
            key={index}
            // className={`todo ${arr.length != index + 1 && "todo-divider"}`}
            className={classNames(styles.todo, {
              [styles.todoDivider]: arr.length != index + 1,
            })}
          >
            {parameterNamaTodo.title}
            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{parameterNamaTodo.count}</div>
              <button className={styles.todoActionButton} onClick={() => props.onSubs(index)}>
                <img src={minusIcon} alt="minus icon"></img>
              </button>
              <button className={styles.todoActionButton} onClick={() => props.onAdd(index)}>
                <img src={plusIcon} alt="plus icon"></img>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

todo.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubs: PropTypes.func,
  onAdd: PropTypes.func,
};
export default todo;
