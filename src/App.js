import React from "react";
import Cube from "./component/cube";
import "./assets/css/cube.css";

function App() {
  return (
    <div className="App my-5">
      {/* <h1 className="text-center my-5">3D Rotating Cube</h1> */}
      <Cube />
    </div>
  );
}

export default App;
