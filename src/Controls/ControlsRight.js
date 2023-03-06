import { useState } from "react";

const ControlsRight = (props) => {
  const [primary, setPrimary] = useState(true);
  const [secondary, setSecondary] = useState(false);
  const [tertiary, setTertiary] = useState(false);

  const clickHandler = (e) => {
    if (e.target.innerText === "All") {
      setPrimary(true);
      setSecondary(false);
      setTertiary(false);
      props.setItems("All");
    } else if (e.target.innerText === "Active") {
      setPrimary(false);
      setSecondary(true);
      setTertiary(false);
      props.setItems("Active");
    } else if (e.target.innerText === "Completed") {
      setPrimary(false);
      setSecondary(false);
      setTertiary(true);
      props.setItems("Completed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <button
        type="button"
        className={`btn ${primary ? "btn-primary" : "btn-outline-secondary"}`}
        style={{
          marginRight: "10px",
        }}
        onClick={clickHandler}
      >
        All
      </button>
      <button
        type="button"
        className={`btn ${secondary ? "btn-primary" : "btn-outline-secondary"}`}
        style={{
          marginRight: "10px",
        }}
        onClick={clickHandler}

      >
        Active
      </button>
      <button
        type="button"
        className={`btn ${tertiary ? "btn-primary" : "btn-outline-secondary"}`}
        style={{
          marginRight: "10px",
        }}
        onClick={clickHandler}
      >
        Completed
      </button>
    </div>
  );
};

export default ControlsRight;
