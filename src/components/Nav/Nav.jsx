/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { NavContainer, NavBarUl, NavBarLi } from '../StyledComponents/Nav'

export default function Nav ({ onSearch }) {
  return (
    <NavContainer>
      <NavBarUl>
        <NavBarLi>
          <Link to={'/home'}>Home</Link>
        </NavBarLi>
        <NavBarLi>
          <Link to={'/about'}>About</Link>
        </NavBarLi>
      </NavBarUl>
      <SearchBar onSearch={onSearch} />
    </NavContainer>
  )
}
