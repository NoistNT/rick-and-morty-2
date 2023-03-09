/* eslint-disable react/prop-types */
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav ({ onSearch }) {
  return (
    <>
      <SearchBar onSearch={onSearch}/>
    </>
  )
}
