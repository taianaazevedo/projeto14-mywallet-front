import { BrowserRouter, Routes, Route } from "react-router-dom"
import TelaLogin from "./pages/TelaLogin/TelaLogin"
import TelaCadastro from "./pages/TelaCadastro/TelaCadastro"

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<TelaCadastro/>}/>
                    {/* <Route path="/home" element={}/>
                    <Route path="/nova-entrada" element={}/>
                    <Route path="nova-saida" element={}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}