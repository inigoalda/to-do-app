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
      visible: true,
    },
    {
      id: 2,
      title: "Learn Firebase",
      completed: false,
      visible: true,
    },
    {
      id: 3,
      title: "Learn React-Redux",
      completed: false,
      visible: true,
    },
  ];
  const [data, setData] = useState(DUMMY_DATA);
  const [currentStatus, setCurrentStatus] = useState("All");

  const dataSetHandler = (state) => {
    if (state === "All") {
      setCurrentStatus("All");
      setData(data.map((item) => {
        return {
          ...item,
          visible: true,
        };
      }
      ));
    }
    if (state === "Active") {
      setCurrentStatus("Active");
      setData(data.map((item) => {
        if (item.completed === true) {
          return {
            ...item,
            visible: false,
          };
        }
        return {
          ...item,
          visible: true,
        };
      }));
    }
    if (state === "Completed") {
      setCurrentStatus("Completed");
      setData(data.map((item) => {
        if (item.completed === true) {
          return {
            ...item,
            visible: true,
          };
        }
        return {
          ...item,
          visible: false,
        };
      }));
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
    const id = event.target.value;
    const updatedData = data.map((item) => {
      if (item.id === parseInt(id)) {
        var visibleTemp = true;
        if (currentStatus === "Completed" && item.completed === true) {
          visibleTemp = false;
        }
        if (currentStatus === "Active" && item.completed === false) {
          visibleTemp = false;
        }
        if (currentStatus === "Active" && item.completed === true) {
          visibleTemp = false;
        }
        return {
          ...item,
          completed: !item.completed,
          visible: visibleTemp,
        };
      }
      return item;
    });
    // Set the data safely through an updater function
    setData(updatedData);

  };

  const addNewHandler = (event) => {
    var visibleTemp = true;
    if (currentStatus === "Completed") {
      visibleTemp = false;
    }
    setData([
      ...data,
      {
        id: data.length + 1,
        title: event.target.value,
        completed: false,
        visible: visibleTemp,
      },
    ]);
    setVisible(false);
    props.setVisibility(false);
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
            <Search placeholder={placeholder} setSearchTerm={searchHandler} visible={visible} setVisible={setVisibleHandler} setAddNew={addNewHandler}></Search>
            <Tasks items={data} checkHandler={checkHandler}></Tasks>
          </div>
        </div>
        <Controls items={data} setItems={dataSetHandler} placeholderHandler={placeholderHandler}></Controls>
      </div>
    </div>
  );
};

export default Card;
