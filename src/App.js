import React, { useState } from 'react'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error404 from './components/Error404/Error404'
import { AppContainer } from './components/StyledComponents/App'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

export default function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    const URL = 'https://be-a-rym.up.railway.app/api'
    const KEY = 'f07923cd55e4.4f5ca7b14f72053b8348'

    axios(`${URL}/character/${id}?key=${KEY}`).then((res) =>
      res.data.name
        ? characters.find((character) => character.id === res.data.id)
          ? window.alert(`${res.data.name} is already added`)
          : setCharacters((character) => [...character, res.data])
        : alert('Character not found')
    )
  }

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id))
  }

  return (
    <AppContainer>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AppContainer>
  )
}
