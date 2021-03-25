import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderLine = styled.nav`
  background-color: #555;
  color: #fff;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  flex-grow: 1;
  text-align: left;
  margin-left: 1rem;
  font-family: cursive;
  font-size: 2rem;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.4rem;
`

export default function Header() {
  return (
    <HeaderLine>
      <Title>Lambda Eats</Title>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/pizza">Order</StyledLink>
    </HeaderLine>
  )
}
