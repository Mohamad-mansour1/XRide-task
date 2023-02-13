import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./screens/Products";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
