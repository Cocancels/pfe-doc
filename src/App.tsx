import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
