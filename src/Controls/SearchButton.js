const SearchButton = (props) => {
    return (
      <button
        type="button"
        className="btn btn-outline-secondary"
        style={{
          marginRight: "10px",
        }}
        onClick={props.placeholderHandler}
      >
        🔍
      </button>
    );
}

export default SearchButton;