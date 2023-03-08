import React from 'react'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'
import { AppContainer } from './components/StyledComponents/App'

export default function App () {
  return (
    <AppContainer>
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </AppContainer>
  )
}
