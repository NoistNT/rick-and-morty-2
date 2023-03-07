/* eslint-disable react/prop-types */
import React from 'react'

export default function SearchBar ({ onSearch }) {
  return (
    <div>
      <input type="search" />
      <button onClick={(characterId) => onSearch(characterId)}>Add</button>
      {/* <button onClick={onSearch}>Add</button> */}
    </div>
  )
}
