import { Container } from "../../components/Container"
import { Form } from "./style"

export default function NovaEntrada() {
    return (
        <Container>
            <p className="info">Nova Entrada</p>
            <Form>
                <input type="text" placeholder="Valor" required />
                <input type="text" placeholder="Descrição" required />
                <button type="submit">Salvar entrada</button>
            </Form>
        </Container>
    )
}

