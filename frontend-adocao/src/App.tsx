import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import CadastraUsuario from "./pages/CadastraUsuario";
import CadastraPet from "./pages/CadastraPet";
import Contato from "./pages/Contato";
<<<<<<< HEAD
import EncontraPet from "./pages/Encontrapet";
=======
import Faq from "./pages/Faq";
>>>>>>> 805af28ba4ced7301160ef863297cd483e7a013b

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastraUsuario" element={<CadastraUsuario/>}></Route>
        <Route path="/cadastraPet" element={<CadastraPet/>}></Route>
        <Route path="/contato" element={<Contato/>}></Route>
<<<<<<< HEAD
        <Route path="/encontra" element={<EncontraPet/>}></Route>
=======
        <Route path="/faq" element={<Faq/>}></Route>
>>>>>>> 805af28ba4ced7301160ef863297cd483e7a013b
      </Routes>
    </Router>
  );
}

export default App;
