/* eslint-disable react/prop-types */
import React from 'react'
import Card from '../Card/Card'

export default function Cards ({ characters }) {
  const onClose = () => window.alert('Emulamos que se cierra la card')
  return (
    <div>
      {characters.map(({ index, name, gender, species, image }) => {
        return (
          <Card
            key={index}
            name={name}
            gender={gender}
            species={species}
            image={image}
            onClose={onClose}
          />
        )
      })}
    </div>
  )
}
