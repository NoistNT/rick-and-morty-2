import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {
  Container,
  CardContainer,
  Image,
  Name,
  DescriptionContainer,
  Description,
  Items,
  LoadingContainer,
  Button,
  Ring
} from '../StyledComponents/Detail.jsx'

export default function Detail () {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const URL = 'https://be-a-rym.up.railway.app/api'
    const KEY = 'f07923cd55e4.4f5ca7b14f72053b8348'

    axios(`${URL}/character/${id}?key=${KEY}`)
      .then((res) => {
        res.data.name
          ? setCharacter(res.data)
          : window.alert('Character not found')
      })
      // eslint-disable-next-line n/handle-callback-err
      .catch((error) => {
        alert('Character not found')
      })
    return setCharacter({})
  }, [id])

  return (
    <Container>
      {character.name
        ? (
        <>
          <Link to={'/home'}>
            <Button>Home</Button>
          </Link>
          <CardContainer>
            <Image src={character.image} alt={character.name} />
            <DescriptionContainer>
              <Name>
                <h2>{character.name}</h2>
              </Name>
              <Description>
                <Items>Status: {character.status}</Items>
                <Items>Specie: {character.species}</Items>
                <Items>Gender: {character.gender}</Items>
                <Items>Origin location: {character.origin?.name}</Items>
              </Description>
            </DescriptionContainer>
          </CardContainer>
        </>
          )
        : (
        <LoadingContainer>
          <Ring>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Ring>
          <span>Loading...</span>
        </LoadingContainer>
          )}
    </Container>
  )
}
