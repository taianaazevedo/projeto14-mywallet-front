
import { Container } from "../../components/Container"
import exit from "../../assets/Exit.png"
import { Header, Registros, AddInfo, Lancamento } from "./style"

export default function Home() {
    return (
        <Container>
            <Header>
                <p>Olá, fulano</p>
                <img src={exit} alt=""/>
            </Header>
            <Registros>
                {/* <p>Não há registros de entrada ou saída</p> */}
                <Lancamento>
                    <div className="dia">20/01</div>
                    <div className="descricao">Almoço</div>
                    <div className="valor">20,90</div>
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

            <AddInfo>
                <div className="addEntrada">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br /> entrada</p>
                </div>
                <div className="addSaida">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova <br/> saída</p>
                </div>
            </AddInfo>
        </Container>
    )
}



