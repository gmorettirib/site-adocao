import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraPet from "./pages/CadastraPet";
import Contato from "./pages/Contato";
import EncontraPet from "./pages/EncontraPet";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastra" element={<CadastraUsuario/>}></Route>
        <Route path="/cadastraPet" element={<CadastraPet/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
        <Route path="/encontra" element={<EncontraPet/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
