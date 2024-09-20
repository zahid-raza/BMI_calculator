import "./App.css";
import Home from "./Components/Home";
import BmiCalculator from "./Components/BmiCalculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BmiCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
