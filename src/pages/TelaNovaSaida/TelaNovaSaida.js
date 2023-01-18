import { Container } from "../../components/Container"
import { Form } from "./style"

export default function NovaSaida() {
    return (
        <Container>
            <p className="info">Nova saída</p>
            <Form>
                <input type="text" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button type="submit">Salvar saída</button>
            </Form>
        </Container>
    )
}