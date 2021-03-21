import { Card, Container, IncomeIcon, OutcomeIcon } from "./style";
import totalIcon from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Sumary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }

    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Container>
      <Card>
        <div>
          <p>Entradas</p>
          <IncomeIcon />
        </div>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </Card>
      <Card>
        <div>
          <p>Saídas</p>
          <OutcomeIcon />
        </div>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(-summary.withdraw)}
        </strong>
      </Card>
      <Card>
        <div>
          <p>Total</p>
          <img src={totalIcon} alt="" />
        </div>
        <strong>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </Card>
    </Container>
  )
}
