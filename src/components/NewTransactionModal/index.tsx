import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import { ButtonClose, Container, IconClose, IncomeIcon, Input, OutcomeIcon, SubmitButton, Title, TransactionTypeContainer, RadioButton } from './style';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root')

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      name,
      amount: Number(amount),
      category,
      type
    })

    resetForm()
    onRequestClose()
  }

  function resetForm() {
    setName('')
    setAmount('')
    setType('deposit')
    setCategory('')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <ButtonClose
          type="button"
          onClick={onRequestClose}
        >
          <IconClose />
        </ButtonClose>
        <Title>Cadastrar transação</Title>
        <Input
          placeholder="Nome"
          value={name}
          required
          onChange={event => setName(event.target.value)}
        />
        <Input
          type="number"
          placeholder="Valor"
          value={amount}
          required
          onChange={event => setAmount(event.target.value)}
        />
        <TransactionTypeContainer>
          <RadioButton
            type="button"
            isActive={type === 'deposit'}
            activeBackgroundColor="green"
            onClick={() => setType('deposit')}
          >
            <IncomeIcon />
            Entrada
          </RadioButton>
          <RadioButton
            type="button"
            activeBackgroundColor="red"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <OutcomeIcon />
            Saída
          </RadioButton>
        </TransactionTypeContainer>
        <Input
          placeholder="Categoria"
          value={category}
          required
          onChange={event => setCategory(event.target.value)}
        />
        <SubmitButton type="submit">
          Cadastrar
        </SubmitButton>
      </Container>
    </Modal>
  )
}
