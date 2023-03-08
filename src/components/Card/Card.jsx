/* eslint-disable react/prop-types */
import React from 'react'
import {
  CardContainer,
  Image,
  Name,
  Description,
  Button
} from '../StyledComponents/Card'

export default function Card ({ name, species, gender, image, onClose }) {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <Name>
        <h2>{name}</h2>
      </Name>
      <Description>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </Description>
      <Button onClick={onClose}>Remove</Button>
    </CardContainer>
  )
}
