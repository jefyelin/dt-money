import { Card, Container } from "./style";
import incomeIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import totalIcon from '../../assets/total.svg'

export function Sumary() {
  return (
    <Container>
      <Card>
        <div>
          <p>Entradas</p>
          <img src={incomeIcon} alt="" />
        </div>
        <strong>R$1000,00</strong>
      </Card>
      <Card>
        <div>
          <p>Saídas</p>
          <img src={outcomeIcon} alt="" />
        </div>
        <strong>R$500,00</strong>
      </Card>
      <Card>
        <div>
          <p>Total</p>
          <img src={totalIcon} alt="" />
        </div>
        <strong>R$1500,00</strong>
      </Card>
    </Container>
  )
}
