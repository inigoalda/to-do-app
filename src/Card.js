import "./Card.css";
import { useState } from "react";
import Tasks from "./Tasks";
import Controls from "./Controls/Controls";
import Search from "./Search";

const Card = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Firebase",
      completed: false,
    },
    {
      id: 3,
      title: "Learn React-Redux",
      completed: false,
    },
  ];
  const [data, setData] = useState(DUMMY_DATA);
  const dataSetHandler = (state) => {
    if (state === "All") {
      setData(DUMMY_DATA);
    }
    if (state === "Active") {
      setData(DUMMY_DATA.filter((item) => item.completed === false));
    }
    if (state === "Completed") {
      setData(DUMMY_DATA.filter((item) => item.completed === true));
    }
  };

  const [placeholder, setPlaceholder] = useState("Add New");
  const [visible, setVisible] = useState(false);

  const setVisibleHandler = (state) => {
    setVisible(state);
    props.setVisibility(state);
  };

  const placeholderHandler = (state) => {
    if (state.target.textContent === "➕") {
      setPlaceholder("Add New");
      setVisible(true);

    }
    if (state.target.textContent === "🔍") {
      setPlaceholder("Search");
      setVisible(true);
    }
    props.setVisibility(true);
    
  };

  const searchHandler = (event) => {
    setData(DUMMY_DATA.filter((item) => item.title.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const checkHandler = (event) => {
    console.log(event);
  };


  return (
    <div className="card">
      <div className="" id="mainCard">
        <div
          style={{
            padding: "20px",
            paddingBottom: "0px",
          }}
        >
          <h1 className="card-title text-center">THINGS TO DO</h1>
          <div
            className="form-group"
            style={{
              marginBottom: "10px",
            }}
          >
            <Search placeholder={placeholder} setSearchTerm={searchHandler} visible={visible} setVisible={setVisibleHandler}></Search>
            <Tasks items={data} checkHandler={checkHandler}></Tasks>
          </div>
        </div>
        <Controls items={data} setItems={dataSetHandler} placeholderHandler={placeholderHandler}></Controls>
      </div>
    </div>
  );
};

export default Card;
