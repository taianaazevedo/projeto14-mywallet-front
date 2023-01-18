
import { Container } from "../../components/Container"
import exit from "../../assets/Exit.png"
import { Header, Registros, AddInfo, Lancamento, Saldo } from "./style"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <Container>
            <Header>
                <p data-test="user-name">Olá, fulano</p>
                <img src={exit} alt="" data-test="logout" />
            </Header>
            <Registros>
                {/* <p>Não há registros de entrada ou saída</p> */}
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao" data-test="registry-name">Almoço</div>
                    <div className="valor" data-test="registry-amount">20,90</div>
                </Lancamento>
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Churrasco</div>
                    <div className="valor">69,90</div>
                </Lancamento>
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Empréstimo</div>
                    <div className="valor">200,00</div>
                </Lancamento>
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Dívida do jogo do bicho</div>
                    <div className="valor">500,00</div>
                </Lancamento>
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Máquina de lavar</div>
                    <div className="valor">400,00</div>
                </Lancamento>
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Hospital</div>
                    <div className="valor">1500,00</div>
                </Lancamento>
            </Registros>
            <Saldo>
                <span className="saldo"><strong>SALDO</strong></span>
                <span className="total" data-test="total-amount">2.000,00</span>
            </Saldo>
            <AddInfo>
                <div className="addEntrada">
                    <Link to="/nova-entrada" data-test="new-income">
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </Link>
                    <p>Nova <br /> entrada</p>
                </div>
                <div className="addSaida">
                    <Link to="/nova-saida" data-test="new-expense">
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </Link>
                    <p>Nova <br /> saída</p>
                </div>
            </AddInfo>
        </Container>
    )
}



