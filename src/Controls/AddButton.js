const AddButton = (props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        style={{
          marginRight: "10px",
        }}
        onClick={props.placeholderHandler}
      >
        ➕
      </button>
    </div>
  );
};

export default AddButton;
