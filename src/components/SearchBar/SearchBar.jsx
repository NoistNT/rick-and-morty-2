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

  return (
    <SearchBarContainer>
      <SearchBarInput type="search" onChange={handleChange}/>
      <SearchBarButton onClick={() => onSearch(id)}>
        Add Character
      </SearchBarButton>
    </SearchBarContainer>
  )
}
