import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  console.log(process.env.REACT_APP_PUBLIC_FOLDER);
  return (
    <Router>
      <Routes path="/">
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
