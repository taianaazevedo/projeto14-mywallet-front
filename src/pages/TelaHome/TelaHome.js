
import { Container } from "../../components/Container"
import exit from "../../assets/Exit.png"
import { Header, Registros, AddInfo } from "./style"

export default function Home() {
    return (
        <Container>
            <Header>
                <p>Olá, fulano</p>
                <img src={exit} alt=""/>
            </Header>
            <Registros>
                <p>Não há registros de entrada ou saída</p>
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



