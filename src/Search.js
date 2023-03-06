import React, { useState } from "react";

const Search = (props) => {
  const searchInputHandler = (event) => {
    props.setSearchTerm(event);
  };

  const addNewHandler = (event) => {
    props.setAddNew(event);
  };

  const destroyHandler = (event) => {
    if (event.key === "Escape") {
      props.setVisible(false);
    }
  };

  return (
    <div>
      {props.visible && props.placeholder === "Search" && (
        <input
          type="text"
          className="form-control"
          placeholder={props.placeholder}
          onInput={searchInputHandler}
          onKeyDown={destroyHandler}
        />
      )}
      {props.visible && props.placeholder === "Add New" && (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
            onKeyDown={destroyHandler}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
