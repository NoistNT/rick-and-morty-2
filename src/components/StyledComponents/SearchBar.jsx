import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`
export const SearchBarInput = styled.input`
  height: 1.6rem;
  min-width: 25%;
  outline: 0;
  border: none;
  border-radius: 0.4rem 0 0 0.4rem;
  background-color: #0000008f;
  color: #e2e2e2;
  font-size: 0.95rem;
  flex-grow: 1;
  padding: 0;
`
export const SearchBarButton = styled.button`
  font-family: 'Raleway', sans-serif;
  font-size: .95rem;
  color: #e2e2e2;
  background-color: #6d2d7a;
  border: none;
  border-radius: 0 0.4rem 0.4rem 0;
  padding: 0.25rem 1rem;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
