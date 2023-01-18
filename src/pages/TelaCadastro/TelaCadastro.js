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
                    <input type="text" placeholder="Nome" required data-test="name"/>
                    <input type="email" placeholder="E-mail" required data-test="email"/>
                    <input type="password" placeholder="Senha" required data-test="password"/>
                    <input type="password" placeholder="Confirme a senha" required data-test="conf-password"/>
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



