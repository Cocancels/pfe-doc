import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Docs } from "./Pages/Docs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Docs />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
