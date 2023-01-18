import styled from "styled-components"

export const Header = styled.div`
width: 326px;
margin-top: 25px;
display: flex;
justify-content: space-between;


p {    
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

export const Registros = styled.div`
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


export const Lancamento = styled.div`
    margin-top:20px;
    display:flex;
    .dia{
        margin-left: 12px;
        color: #C6C6C6;
    }
    .descricao{
        width:200px;
        margin-left: 10px;
    }
    .valor{
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
        width:62px;
        color:#C70000;
    }
    
`

export const AddInfo = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    p{
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
        margin-left: 8px;
        margin-top: 8px;
    }
`