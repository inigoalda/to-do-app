import ControlsLeft from "./ControlsLeft";
import ControlsRight from "./ControlsRight";

const ControlsBar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ControlsLeft items={props.items} placeholderHandler={props.placeholderHandler}></ControlsLeft>
      <ControlsRight setItems={props.setItems}></ControlsRight>
    </div>
  );
};

export default ControlsBar;
