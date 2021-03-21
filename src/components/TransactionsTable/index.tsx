import { useTransactions } from "../../hooks/useTransactions";
import { Container, Table, TBody, THead } from "./style";

export function TransactionTable() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <Table>
        <THead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </THead>
        <TBody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.name}</td>
              <td className={transaction.type}>
                {transaction.type === 'deposit'
                  ? new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)
                  : new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(-transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </TBody>
      </Table>
    </Container>
  )
}
