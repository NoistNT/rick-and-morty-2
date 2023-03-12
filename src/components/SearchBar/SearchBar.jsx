/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarButton
} from '../StyledComponents/SearchBar'

export default function SearchBar ({ onSearch }) {
  const [id, setId] = useState('')

  const handleChange = (e) => {
    setId(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(id)
      setId((e.target.value = ''))
    }
  }

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={id}
      />
      <SearchBarButton onClick={() => onSearch(id)}>
        Add Character
      </SearchBarButton>
    </SearchBarContainer>
  )
}
