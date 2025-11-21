import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraPet from "./pages/CadastraPet";
import Contato from "./pages/Contato";
import EncontraPet from "./pages/EncontraPet";
import Faq from "./pages/Faq";
import Sobre from "./pages/Sobre";
import Favorito from "./pages/Favorito";
import Perfil from "./components/Perfil/Perfil";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastraUsuario" element={<CadastraUsuario />}></Route>
        <Route path="/cadastraPet" element={<CadastraPet />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/encontra" element={<EncontraPet />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/favorito" element={<Favorito />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
