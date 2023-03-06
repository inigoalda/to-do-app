import ControlsBar from "./ControlsBar";

const Controls = (props) => {
  return (
    <ControlsBar items={props.items} setItems={props.setItems} placeholderHandler={props.placeholderHandler}></ControlsBar>
  );
};

export default Controls;
