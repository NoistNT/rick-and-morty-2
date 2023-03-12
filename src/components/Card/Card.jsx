/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import {
  CardContainer,
  Image,
  Name,
  Description,
  Button
} from '../StyledComponents/Card'

export default function Card ({ id, name, species, gender, image, onClose }) {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <Name>
        <Link to={`/detail/${id}`}>{name}</Link>
      </Name>
      <Description>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </Description>
      <Button onClick={() => onClose(id)}>Remove</Button>
    </CardContainer>
  )
}
