import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

/// components
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Login from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
