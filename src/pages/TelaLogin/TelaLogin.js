
import { Container } from "../../components/Container"
import logo from "../../assets/MyWallet.png"
import { Tela, Form } from "./style"
import { Link, useNavigate } from "react-router-dom"


export default function Login() {
    const navigate = useNavigate()

    return (
        <Container>
            <Tela>
                <img src={logo} alt=""/>
                <Form>
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit">Entrar</button>
                    <br />
                    <Link to="/cadastro">
                        <p>Primeira vez? Cadastre-se!</p>
                    </Link>

                </Form>
            </Tela>
        </Container>
    )
}

