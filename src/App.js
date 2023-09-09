import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import Help from "./Components/Help";
import AlertState from "./Context/AlertState";
import AlertParent from "./Components/AlertParent";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
function App() {
  return (
    <AlertState>
      <Router>
        <Navbar />
        <AlertParent />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={ContactUs} />
          <Route exact path="/help" Component={Help} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" Component={SignUp} />
        </Routes>
      </Router>
    </AlertState>
  );
}

export default App;
