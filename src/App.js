import Home from "./pages/home";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return(
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </Router>

    </div>

  );
}

export default App;



