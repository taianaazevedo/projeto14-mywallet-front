import { Container } from "../../components/Container"
import { Form } from "./style"
import { useState, useContext } from "react"
import axios from "axios"
import UsuarioContext from "../../Context/UsuarioContext"
import { useNavigate } from "react-router-dom"

export default function NovaEntrada() {
    const [valor, setValor] = useState("")
    const [descricao, setDescricao] = useState("")
    const { usuarioLogado } = useContext(UsuarioContext);
    const navigate = useNavigate()


    function salvaEntrada(e){
        e.preventDefault()
        const body = { valor, descricao };
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
        }
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, body, config);
        promise.then((res) => {
            alert("Nova entrada registrada!")
            navigate("/home")            
        });
        promise.catch((erro) => alert("Por favor, tente novamente"));

    }

    

    return (
        <Container>
            <p className="info">Nova Entrada</p>
            <Form onSubmit={salvaEntrada}>
                <input type="text" placeholder="Valor" value={valor} onChange={(e) => setValor(e.target.value)} required data-test="registry-amount-input"/>
                <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}required data-test="registry-name-input"/>
                <button type="submit" data-test="registry-save">Salvar entrada</button>
            </Form>
        </Container>
    )
}

