import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import formSchema from './FormSchema'

const Title = styled.h1`
  text-align: center;
  font-family: cursive;
`

const Img = styled.div`
  height: 16rem;
  background-image: url(${props => props.imageUrl});
`

const ErrorMessage = styled.p`
  margin-top: 0;
  color: darkRed;
  font-size: 0.8rem;
`

export default function PizzaForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formSchema)
  })
  const onSubmit = data => console.log(data)

  return (
    <>
      <Title>Build Your Own Pizza</Title>
      <Img imageUrl="https://cdnimg.webstaurantstore.com/images/articles/42/pizzeria-header.jpg" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Choice of Size</h2>

        <select 
          name="size" ref={register({ required: true })}>
          <option value="">--Please choose an option--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {errors.size && <ErrorMessage>{errors.size.message}</ErrorMessage>}


        <label htmlFor="email_id">email
          <input 
          id="email_id" 
          type="email" 
          name="email" 
          ref={register}
          />
          </label>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <label htmlFor="name">name
          <input
          type="text"
          name="name"
          ref={register}
          />
        </label>
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        {errors.name && <ErrorMessage>{errors.name.min}</ErrorMessage>}

      <h2>Base</h2>
        <select
          name="base" ref={register({ required: true})}>
            <option value="">--Please choose an option--</option>
            <option value="pomodoro">pomodoro</option>
            <option value="garlic olive oil">garlic olive oil</option>
            <option value="basil pesto">basil pesto</option>
        </select>
        {errors.base && <ErrorMessage>{errors.base.message}</ErrorMessage>}
        
        <h2>Toppings</h2>
        <label> pineapple
          <input 
          type="checkbox"
          name="pineapple"
          ref={register}
          />
        </label>

        <label> spinach
          <input
          type="checkbox"
          name="spinach"
          ref={register}
          />
        </label> 
        
        <label>artichoke hearts
          <input
          type="checkbox"
          name="artichokeHearts"
          ref={register}
          />
        </label> 

        <label> sundried tomatoes
          <input
          type="checkbox"
          name="sundriedTomatoes"
          ref={register}
          />
        </label>

        <label> goat cheese
          <input
          type="checkbox"
          name="goatCheese"
          ref={register}
          />
        </label>

        <label> red onion
          <input
          type="checkbox"
          name="redOnion"
          ref={register}
          />
        </label>

        <label> green pepper
          <input
          type="checkbox"
          name="greenPeppers"
          ref={register}
          />
        </label>

        <label> red pepper
          <input
          type="checkbox"
          name="redPeppers"
          ref={register}
          />
        </label>

        <label> banana peppers
          <input
          type="checkbox"
          name="bananaPeppers"
          ref={register}
          />
        </label>
        
        <label> cream cheese
          <input
          type="checkbox"
          name="creamCheese"
          ref={register}
          />
        </label>

        <label htmlFor="specialInstructions">Special Instructions
          <input 
          type="text"
          name="specialInstructions"
          ref={register}
          />
          <p> * do not add toppings here, some special intructions could result in an increase of price after checkout</p>
          </label>
        <input type="submit" />
        <button type="submit">Order Now</button>
      </form>
    </>
  )
}
