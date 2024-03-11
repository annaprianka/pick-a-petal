import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"; 

function App() {
  return (
    <Router> 

    <TopBar />

        <Routes>

          <Route exact path="/" element={<Home/>} />

          <Route path="/register" element={<Register/>} />

          <Route path="/login" element={<Login/>} />

          <Route path="/write" element={<Write/>} />

        </Routes>

    </Router>
    
  );
}

export default App;
