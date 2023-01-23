import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro";
import TelaHome from "./pages/TelaHome/TelaHome";
import NovaEntrada from "./pages/TelaNovaEntrada/TelaNovaEntrada";
import NovaSaida from "./pages/TelaNovaSaida/TelaNovaSaida";
import UsuarioContext from "./Context/UsuarioContext";
import { useState } from "react";

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <UsuarioContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/home" element={<TelaHome />} />
          <Route path="/nova-entrada" element={<NovaEntrada />} />
          <Route path="nova-saida" element={<NovaSaida />} />
        </Routes>
      </BrowserRouter>
    </UsuarioContext.Provider>
  );
}
