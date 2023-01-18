import { Container } from "../../components/Container";
import logo from "../../assets/MyWallet.png"
import { Tela, Form } from "./style";
import { Link } from "react-router-dom";

export default function Cadastro() {
    return (
        <Container>
            <Tela>
                <img src={logo} alt=""/>
                <Form>
                    <input type="text" placeholder="Nome" required />
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <input type="password" placeholder="Confirme a senha" required />
                    <button type="submit">Cadastrar</button>
                    <br />
                    <Link to="/">
                        <p>Já tem uma conta? Entre agora!</p>
                    </Link>

                </Form>
            </Tela>
        </Container>
    )
}



