import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-family: cursive;
`

const Img = styled.div`
  height: 16rem;
  background-image: url(${props => props.imageUrl});
`

export default function PizzaForm() {
  return (
    <>
      <Title>Build Your Own Pizza</Title>
      <Img imageUrl="https://cdnimg.webstaurantstore.com/images/articles/42/pizzeria-header.jpg" />
      <form onSubmit={()=>alert('submitted')}>
        <h2>Choice of Size</h2>
        <select>
          <option value="">--Please choose an option--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button type="submit">Order Now</button>
      </form>
    </>
  )
}
