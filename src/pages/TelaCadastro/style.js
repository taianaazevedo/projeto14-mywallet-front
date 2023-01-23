import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  input {
    margin-top: 10px;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }
  &::placeholder {
    color: #000000;
    font-size: 20px;
  }
`;

export const Tela = styled.div`
  min-width: 375px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    margin-top: 25px;
    cursor: pointer;
  }
  img {
    margin-top: 160px;
    width: 140px;
    height: 35px;
  }
  button {
    margin-top: 10px;
    background-color: #a328d6;
    color: #ffffff;
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
