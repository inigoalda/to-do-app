import AddButton from "./AddButton";
import ItemsLeft from "./ItemsLeft";
import SearchButton from "./SearchButton";

const ControlsLeft = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <AddButton placeholderHandler={props.placeholderHandler}></AddButton>
      <SearchButton placeholderHandler={props.placeholderHandler}></SearchButton>
      <ItemsLeft items={props.items}></ItemsLeft>
    </div>
  );
};

export default ControlsLeft;
