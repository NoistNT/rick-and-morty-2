import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`
export const Button = styled.button`
  background-color: #30232e;
  color: #e2e2e2;
  padding: 0.6rem 12rem;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 0.5rem;
  margin: 0.3rem;

  a {
    text-decoration: none;
  }

  &:hover {
    font-weight: 600;
    box-shadow: -1px 3px 14px -6px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 3px 14px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 3px 14px -6px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 1rem;
  background-color: #30232ef2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: 'Raleway', sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    text-shadow: 1px 0px 8px #727272;
    background-color: #30232e;
  }
`
export const Image = styled.img`
  border-radius: 0.5rem;
`
export const Name = styled.h2`
  margin: 1.3rem 0;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  color: #e2e2e2;
  border-bottom: solid gray;
  font-size: 1.1rem;
`
export const DescriptionContainer = styled.div`
  color: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  font-size: 0.7rem;
  border-radius: 50rem;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
`
export const Items = styled.h2`
  padding: 0.001rem 0.4rem;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0000008f;
  height: 100vh;
  width: 100vw;

  span {
    background-color: #2e2e2ed3;
    color: #e2e2e2;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.2rem;
  }
`
export const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    border: 0.6rem solid #aaaaaa;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #e2e2e2 transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
