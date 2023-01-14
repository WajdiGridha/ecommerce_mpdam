import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-detail" element={<ProductDetail />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
