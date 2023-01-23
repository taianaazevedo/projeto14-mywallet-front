import { Container } from "../../components/Container";
import { Form } from "./style";
import { useState, useContext } from "react";
import axios from "axios";
import UsuarioContext from "../../Context/UsuarioContext";
import { useNavigate } from "react-router-dom";

export default function NovaSaida() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const { usuarioLogado } = useContext(UsuarioContext);
  const navigate = useNavigate();

  function salvaSaida(e) {
    e.preventDefault();
    const body = { valor, descricao };
    const config = {
      headers: {
        Authorization: `Bearer ${usuarioLogado.token}`,
      },
    };
    const promise = axios.post(
      `${process.env.REACT_APP_API_URL}/nova-saida`,
      body,
      config
    );
    promise.then((res) => {
      alert("Nova saída registrada!");
      navigate("/home");
    });
    promise.catch((erro) => alert("Por favor, tente novamente"));
  }
  return (
    <Container>
      <p className="info">Nova saída</p>
      <Form onSubmit={salvaSaida}>
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
          data-test="registry-amount-input"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          data-test="registry-name-input"
        />
        <button type="submit" data-test="registry-save">
          Salvar saída
        </button>
      </Form>
    </Container>
  );
}
