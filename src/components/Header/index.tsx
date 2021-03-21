import { Button, Container, Content, Logo } from "./style";
import logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="" />
        <Button onClick={onOpenNewTransactionModal}>
          Nova transação
        </Button>

      </Content>
    </Container>
  )
}
