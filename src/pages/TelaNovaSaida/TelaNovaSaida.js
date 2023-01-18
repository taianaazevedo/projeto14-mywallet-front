import { Container } from "../../components/Container"
import { Form } from "./style"

export default function NovaSaida() {
    return (
        <Container>
            <p className="info">Nova saída</p>
            <Form>
                <input type="text" placeholder="Valor" required data-test="registry-amount-input"/>
                <input type="text" placeholder="Descrição" required data-test="registry-name-input"/>
                <button type="submit" data-test="registry-save">Salvar saída</button>
            </Form>
        </Container>
    )
}