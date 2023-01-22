import styled from "styled-components"

export const Form = styled.form`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top:100px;
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
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        text-decoration: none;
        margin-top: 25px;
        cursor: pointer;
    }
    img {
        margin-top:110px;
        width:140px;
        height: 35px;
        animation: slide-bottom 0.8s ease-in-out both;
        animation-name: slide-bottom;
    }
    
    @-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}
@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
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

