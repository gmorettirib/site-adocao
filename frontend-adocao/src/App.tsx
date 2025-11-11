import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastra" element={<CadastraUsuario/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
