import styled from 'styled-components'
import { ReactComponent as _IconClose } from '../../assets/close.svg'
import { ReactComponent as _IncomeIcon } from '../../assets/income.svg'
import { ReactComponent as _OutcomeIcon } from '../../assets/outcome.svg'
import { transparentize } from 'polished'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`

export const ButtonClose = styled.button`
  background-color: transparent;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  width: 2.75rem;
  border: 0;
  transition: background-color 0.2s;

  &:hover,
  &:focus {
    background-color: var(--primary-shape-hover);
  }
`

export const IconClose = styled(_IconClose)`
  color: var(--white);
`

export const Title = styled.h2`
  color: var(--white);
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  height: 4rem;
  width: 100%;
  padding: 1.25rem 1.5rem;
  background-color: var(--white);
  border-radius: 0.3125rem;
  border: none;  
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--primary-shape);

  & + input {
    margin-top: 1rem;
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid; 
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface InterfaceRadioButtonProps {
  isActive: boolean;
  activeBackgroundColor: 'green' | 'red';
}

const colors = {
  green: '#13AC35',
  red: '#f15555'
}

export const RadioButton = styled.button<InterfaceRadioButtonProps>`
  height: 4rem;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isActive
    ? transparentize(0.9, colors[props.activeBackgroundColor])
    : 'transparent'
  };
  border: 2px solid ${props => props.isActive
    ? transparentize(0.3, colors[props.activeBackgroundColor])
    : 'var(--primary-shape-hover)'
  };
  border-radius: 0.3125rem;
  transition: background-color 0.2s;
  color: var(--white);
  font-size: 1rem;
  line-height: 1.5rem;
  
  &:hover, &:focus {
    background-color: ${props => transparentize(0.9, colors[props.activeBackgroundColor])};
  }

  svg {
    margin-right: 1rem;
  }
`

export const IncomeIcon = styled(_IncomeIcon)`
  color: var(--green);
`

export const OutcomeIcon = styled(_OutcomeIcon)`
  color: var(--red);
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 4rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 0.3125rem;
  background-color: var(--blue-dark);
  color: var(--white);
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  transition: background-color 0.2s;

  &:hover, &:focus {
    background-color: var(--blue-dark-hover);
  }
`


