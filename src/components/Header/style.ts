import styled from 'styled-components'

export const Container = styled.header`
  background: linear-gradient(
    180deg, 
    var(--blue) 0%, 
    var(--background) 100%
  );

  height: 210px;
`

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 728px) {
    padding: 2rem 1.5rem 4rem 1.5rem;
  }
`

export const Logo = styled.img`
  width: 8.4375rem;
  height: 1.875rem;

  @media (min-width: 728px) {
     width: 10.75rem;
     height: 2.5rem;
  }
`

export const Button = styled.button`
  background-color: var(--primary-shape);
  color: var(--white);
  padding: 0.75rem 1rem;
  display: flex; 
  align-content: center;
  border: 0;
  border-radius: 0.3125rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin-left: 0.625rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-shape-hover);
  }

  @media (min-width: 728px) {
    padding: 0.75rem 2rem;
  }
`
