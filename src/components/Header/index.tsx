import { Button, Container, Content, Logo } from "./style";
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo src={logo} alt="" />
        <Button>Nova transação</Button>
      </Content>
    </Container>
  )
}
