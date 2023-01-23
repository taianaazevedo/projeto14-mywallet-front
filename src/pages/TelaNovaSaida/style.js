import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  input {
    margin-top: 10px;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
  }
  &::placeholder {
    color: #000000;
  }
  button {
    margin-top: 10px;
    background-color: #a328d6;
    color: #ffffff;
    font-weight: 700;
    width: 300px;
    height: 45px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
