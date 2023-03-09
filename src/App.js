import React, { useState } from 'react'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import { AppContainer } from './components/StyledComponents/App'

export default function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    const URL = 'https://be-a-rym.up.railway.app/api'
    const KEY = 'f07923cd55e4.4f5ca7b14f72053b8348'

    fetch(`${URL}/character/${id}?key=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        data.name
          ? characters.some((character) => character.id === data.id)
            ? window.alert(`${data.name} is already added`)
            : setCharacters((character) => [...character, data])
          : window.alert('Character not found')
      })
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }
  return (
    <AppContainer>
      <Nav onSearch={onSearch}/>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </AppContainer>
  )
}
