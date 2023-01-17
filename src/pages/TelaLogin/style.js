import styled from "styled-components"

export const Form = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top:5px;
    input {
        margin-top: 10px;
        width:300px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }
    &::placeholder{
            color: #000000;
        }
`

export const Tela = styled.div`
    min-width:375px;
    height: 670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    p{
        color:#FFFFFF;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        margin-top: 25px;
        cursor: pointer;
    }
    img {
        margin-top:160px;
        width:140px;
        height: 35px;
    }
    button{
        margin-top: 10px;
        background-color: #A328D6;
        color:#FFFFFF;
        width:300px;
        height: 45px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

`

