import React from "react";
import UserList from "./component/UserList";

function App() {
  return (
    <div>
      <h1 style={{display: "flex", justifyContent:"center", fontSize: "25px"}}>User List Results</h1>
      <UserList/>
    </div>
  );
}

export default App;
