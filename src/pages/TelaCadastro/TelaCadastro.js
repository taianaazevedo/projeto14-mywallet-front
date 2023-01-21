import { Container } from "../../components/Container";
import logo from "../../assets/MyWallet.png"
import { Tela, Form } from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [nome, setNome] = useState("");    
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        const body = { nome, email, senha, confirmaSenha };
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, body);
        promise.then((res) => {
            alert("Cadastro realizado!");
            navigate("/");
        });
        promise.catch((err) => alert(err.response.data.message))

    }

    return (
        <Container>
            <Tela>
                <img src={logo} alt=""/>
                <Form onSubmit={cadastrar}>
                    <input type="text" placeholder="Nome" required data-test="name" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="email" placeholder="E-mail" required data-test="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" required data-test="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <input type="password" placeholder="Confirme a senha" required data-test="conf-password" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)}/>
                    <button type="submit" data-test="sign-up-submit"><strong>Cadastrar</strong></button>
                    <br />
                    <Link to="/">
                        <p>Já tem uma conta? Entre agora!</p>
                    </Link>

                </Form>
            </Tela>
        </Container>
    )
}



