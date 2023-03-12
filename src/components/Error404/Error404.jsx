import React from 'react'
import { Link } from 'react-router-dom'
import {
  Space,
  Wrapper,
  Span,
  P,
  Button,
  PContainer,
  ErrorContainer
} from '../StyledComponents/Error404'

export default function Error404 () {
  return (
    <>
      <ErrorContainer>
        <Space></Space>
        <Wrapper>
          <Span>44</Span>
          <PContainer>
            <P>
              {'You have entered into a unknown dimension, reality or planet.'}
            </P>
          </PContainer>
          <Link to={'/home'}>
            <Button type="button">Return to Earth (C-137)</Button>
          </Link>
        </Wrapper>
      </ErrorContainer>
    </>
  )
}
