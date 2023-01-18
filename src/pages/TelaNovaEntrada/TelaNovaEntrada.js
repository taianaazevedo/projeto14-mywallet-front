import { Container } from "../../components/Container"
import { Form } from "./style"

export default function NovaEntrada() {
    return (
        <Container>
            <p className="info">Nova Entrada</p>
            <Form>
                <input type="text" placeholder="Valor" required data-test="registry-amount-input"/>
                <input type="text" placeholder="Descrição" required data-test="registry-name-input"/>
                <button type="submit" data-test="registry-save">Salvar entrada</button>
            </Form>
        </Container>
    )
}

