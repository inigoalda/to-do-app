const ItemsLeft = (props) => {
    return (
      <p
        style={{
          margin: "0px",
          borderLeft: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
      >
        {props.items.filter((item) => item.completed === false).length} items
        left
      </p>
    );
};

export default ItemsLeft;