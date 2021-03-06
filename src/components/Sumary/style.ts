import styled from 'styled-components';
import { ReactComponent as _IncomeIcon } from '../../assets/income.svg'
import { ReactComponent as _OutcomeIcon } from '../../assets/outcome.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -4.0625rem;
`

export const Card = styled.div`
  padding: 1.5625rem 1.125rem 1.125rem 2rem;
  color: var(--white);
  background-color: var(--primary-shape);
  border-radius: 0.3125rem;

  &:last-child {
    color: var(--primary-shape);
    background-color: var(--white);
  }

  div { 
    display: flex;
    justify-content: space-between;
    
    p {
      font-weight: 500;
    }
  }

  strong { 
    margin-top: 0.875rem;
    font-size: 2.25rem;
    font-weight: 500;
    line-height:  3.375rem;
  }
`

export const IncomeIcon = styled(_IncomeIcon)`
  color: var(--green);
`

export const OutcomeIcon = styled(_OutcomeIcon)`
  color: var(--red);
`

