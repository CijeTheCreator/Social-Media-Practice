import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  console.log(process.env.REACT_APP_PUBLIC_FOLDER);
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes path="/">
        <Route
          exact
          path="/"
          element={user ? <Home></Home> : <Login />}
        ></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        <Route
          exact
          path="/login"
          element={!user ? <Login /> : <Home></Home>}
        ></Route>
        <Route
          exact
          path="/register"
          element={!user ? <Register /> : <Home></Home>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
