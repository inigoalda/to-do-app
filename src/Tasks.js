const Tasks = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        item.visible && <div
          className="form-check"
          key={item.id}
          id="task"
          style={{
            borderBottom:
              item.id === props.items.length ? "none" : "1px solid lightgrey",
            paddingBottom: item.id === props.items.length ? "0px" : "10px",
          }}
        >
          <input className="form-check-input" type="checkbox" onChange={props.checkHandler} value={item.id} id={item.id} checked={item.completed} />
          <label className="form-check-label">{item.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
