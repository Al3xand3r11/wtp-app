import "./App.css";
import Home from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
