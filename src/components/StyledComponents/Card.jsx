import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 1rem auto;
  border-radius: 0.4rem;
  background-color: #477199;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
const Image = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
`
const Name = styled.h2`
  margin: 1.3rem 0;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  color: #e2e2e2;
  border-bottom: solid gray;
  font-size: 1.1rem;
`
const Description = styled.div`
  color: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.7rem;
`
const Button = styled.button`
  width: 80%;
  background-color: #27859c;
  color: #e2e2e2;
  border-style: none;
  border-radius: 0.2rem;
  padding: 0.8rem 0.2rem;
  margin-bottom: 0.4rem;
  transition: 0.27s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;

  &:hover {
    width: 100%;
    transition: 0.27s;
    color: lightpink;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.1rem;
  }
`
export { CardContainer, Image, Name, Description, Button }
