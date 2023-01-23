import styled from "styled-components";

export const Header = styled.div`
  width: 326px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    animation-name: tracking-in-expand;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  img {
    width: 23px;
    height: 23px;
  }
`;

export const Registros = styled.div`
  width: 326px;
  height: 447px;
  background-color: #ffffff;
  overflow: auto;
  margin-top: 22px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  p {
    margin-top: 200px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

export const Lancamento = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  .dia {
    margin-left: 12px;
    color: #c6c6c6;
  }
  .descricao {
    width: 200px;
    margin-left: 10px;
  }
  .valor {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    width: 62px;
    color: ${(props) => (props.tipo === "saida" ? "#C70000" : "#03AC00")};
  }
`;

export const Saldo = styled.div`
  width: 326px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .saldo {
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .total {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${(props) => (props.saldo > 0 ? "#03AC00" : "#C70000")};
  }
`;

export const AddInfo = styled.div`
  width: 326px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
    margin-left: 10px;
    margin-top: 30px;
  }
  .addEntrada {
    margin-top: 13px;
    width: 155px;
    height: 115px;
    background-color: #a328d6;
    border-radius: 5px;
  }
  .addSaida {
    margin-top: 13px;
    width: 155px;
    height: 115px;
    background-color: #a328d6;
    border-radius: 5px;
  }
  ion-icon {
    font-size: 30px;
    color: #ffffff;
    margin-left: 8px;
    margin-top: 8px;
  }
`;
