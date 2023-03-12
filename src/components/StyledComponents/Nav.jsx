import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: #3c3649;
  font-family: 'Raleway', sans-serif;
  min-width: 100%;
`
export const NavBarUl = styled.ul`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  list-style: none;
  text-decoration: none;
  color: #e2e2e2;
  padding: 0;

  a {
    align-items: center;
    color: #e2e2e2;
    text-decoration: none;
    padding: 0 1rem;
  }

  &:hover {
    font-weight: 600;
  }
`
export const NavBarLi = styled.li`
  display: flex;
  align-items: center;
`
