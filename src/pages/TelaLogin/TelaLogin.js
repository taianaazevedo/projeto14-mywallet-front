import { Container } from "../../components/Container"
import logo from "../../assets/MyWallet.png"
import { Tela, Form } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"
import UsuarioContext from "../../Context/UsuarioContext"



export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const { setUsuarioLogado } = useContext(UsuarioContext);



    function login(e) {
        e.preventDefault();
        const body = { email, senha };
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body);
        promise.then((res) => {
            // console.log(res.data)
            alert("Login realizado com sucesso! :)")
            setUsuarioLogado(res.data);
            navigate("/home");
        });
        promise.catch((err) => alert(err.response.data.message))
    }

    return (
        <Container>
            <Tela>
                <img src={logo} alt="" />
                <Form onSubmit={login}>
                    <input type="email" placeholder="E-mail" required data-test="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" required data-test="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <button type="submit" data-test="sign-in-submit"><strong>Entrar</strong></button>
                </Form>
                <br />
                <Link to="/cadastro">
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </Tela>
        </Container>
    )
}

