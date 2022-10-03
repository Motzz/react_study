import PropTypes from "prop-types";
const SearchInput = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <input type="text" className="input" placeHolder="List" onChange={props.onChange} value={props.value}></input>
      <button className="add-button" type="submit">
        add
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default SearchInput;
