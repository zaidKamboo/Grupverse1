import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import Help from "./Components/Help";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={ContactUs} />
          <Route exact path="/help" Component={Help} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
