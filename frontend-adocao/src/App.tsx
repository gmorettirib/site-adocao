import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraPet from "./pages/CadastraPet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastraUsuario" element={<CadastraUsuario/>}></Route>
        <Route path="/cadastraPet" element={<CadastraPet/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
