import React from "react";
import Login from "./Login/Login";
import Welcome from "./Welcome/Welcome";
import Register from "./registerpage/Register";
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route  
        path="/signup"
        element={
          <div className="container">
            {<Register />}
          </div>
        }
      />
      <Route  
        path="/"
        element={
          <div className="container">
            {<Welcome />}
          </div>
        }
      />
      <Route
        path="/login"
        element={
          <div className="container">
            <Login/>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
