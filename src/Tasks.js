const Tasks = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <div
          className="form-check"
          key={item.id}
          id="task"
          style={{
            borderBottom:
              item.id === props.items.length ? "none" : "1px solid lightgrey",
            paddingBottom: item.id === props.items.length ? "0px" : "10px",
          }}
        >
          <input className="form-check-input" type="checkbox" onChange={props.checkHandler}/>
          <label className="form-check-label">{item.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
