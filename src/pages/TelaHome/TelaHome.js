
import { Container } from "../../components/Container"
import exit from "../../assets/Exit.png"
import { Header, Registros, AddInfo, Lancamento, Saldo } from "./style"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import UsuarioContext from "../../Context/UsuarioContext"
import axios from "axios"


export default function Home() {
    const [lancamentos, setLancamentos] = useState([]);
    const [saldo, setSaldo] = useState(0)
    const { usuarioLogado } = useContext(UsuarioContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${usuarioLogado.token}`
            }
            
        }
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/home`, config);
        promise.then((res) => {   
            let total = 0 
            res.data.map((item) => {
                if(item.tipo === "saida"){
                   return total -= item.valor 
                } else {
                   return total += item.valor 
                }
            })
            setSaldo(total)
            setLancamentos(res.data);
        })
        promise.catch((err) => console.log(err.response.data.message))

    }, [])

    if (lancamentos === null) {
        return <div>Carregando...</div>
    }


    return (
        <Container>
            <Header>
                <p data-test="user-name">Olá, {usuarioLogado.usuarioLogado.nome}</p>
                <Link to="/">
                    <img src={exit} alt="" data-test="logout" />
                </Link>
            </Header>
            <Registros>
                {lancamentos.length === 0 ? (
                    <p>Não há registros de entrada ou saída</p>
                ) : (lancamentos.map((item) => <Lancamento key={item._id} tipo={item.tipo}>
                    <div className="dia">{item.dia}</div>
                    <div className="descricao" data-test="registry-name">{item.descricao}</div>
                    <div className="valor" data-test="registry-amount" >{item.valor.toFixed(2).replace(".", ",")}</div>
                </Lancamento>)
                )}
            </Registros>
            <Saldo saldo={saldo}>
                <span className="saldo"><strong>SALDO</strong></span>
                <span className="total" data-test="total-amount">{saldo.toFixed(2).replace(".", ",")}</span>
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



