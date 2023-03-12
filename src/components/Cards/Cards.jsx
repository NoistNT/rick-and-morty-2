/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../Card/Card'
import { CardsContainer } from '../StyledComponents/Cards'

export default function Cards ({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, gender, species, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            gender={gender}
            species={species}
            image={image}
            onClose={onClose}
          />
        )
      })}
    </CardsContainer>
  )
}
