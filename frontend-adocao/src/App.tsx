import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraPet from "./pages/CadastraPet";
import Contato from "./pages/Contato";
import EncontraPet from "./pages/Encontrapet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastraUsuario" element={<CadastraUsuario/>}></Route>
        <Route path="/cadastraPet" element={<CadastraPet/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/encontra" element={<EncontraPet/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
