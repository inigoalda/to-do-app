import "./App.css";
import Card from "./Card";
import { useState } from "react";


function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="">
      <Card setVisibility={setVisible}></Card>
      {visible && <p className="text-center" style={{padding: "10px"}}>Press `Esc` to cancel.</p>}
    </div>
  );
}

export default App;
