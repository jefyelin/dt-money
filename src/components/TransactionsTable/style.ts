import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;
`

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`

export const THead = styled.thead`
  tr { 
    th { 
      color: var(--blue);
      font-weight: 600;   
      padding: 1.25rem 32px;
      line-height: 1.5rem;
      text-align: left;
    }
  }
`

export const TBody = styled.tbody`
  tr {        
    td {
      color: var(--white);
      padding: 1.25rem 32px;
      margin-bottom: 8px;
      background-color: var(--primary-shape);

      &:first-child {
        border-radius: 0.3125rem 0 0 0.3125rem;
      }

      &:last-child {
        border-radius: 0 0.3125rem 0.3125rem 0;
      }
      
      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`
