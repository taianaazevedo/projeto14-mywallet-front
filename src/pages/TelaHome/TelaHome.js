import styled from "styled-components"
import { Container } from "../../components/Container"
import exit from "../../assets/Exit.png"

export default function Home() {
    return (
        <Container>
            <Header>
                <p>Olá, fulano</p>
                <img src={exit} />
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

const Header = styled.div`
    width: 326px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;


 p {    
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    }
    img {
        width:23px;
        height: 23px;
    }

`

const Registros = styled.div`
    width: 326px;
    height: 446px;
    background-color: #FFFFFF;
    margin-top: 22px;
    border-radius: 5px;
    p{
    margin-top: 200px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    }

`

const AddInfo = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        margin-left: 10px;
        margin-top: 30px;
    }
    .addEntrada {
        margin-top: 13px;
        width:155px;
        height: 115px;
        background-color: #A328D6;
        border-radius: 5px;
    }
    .addSaida {
        margin-top: 13px;
        width:155px;
        height: 115px;
        background-color: #A328D6;
        border-radius: 5px;
    }
    ion-icon {
        font-size: 30px;
        color: #FFFFFF;
        margin-left: 10px;
        margin-top: 10px;
    }
`