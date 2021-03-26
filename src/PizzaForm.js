import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import formSchema from './FormSchema'
import axios from 'axios'

const Title = styled.h1`
  text-align: center;
  font-family: cursive;
`

const Img = styled.div`
  height: 16rem;
  background-image: url(${props => props.imageUrl});
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const ErrorMessage = styled.p`
  margin-top: 0;
  color: darkRed;
  font-size: 0.8rem;
`
const Toppings = styled.div`
  display: grid;
  grid-template-columns: 14rem 14rem;
  grid-row-gap: 0.5rem;

  & label {
    display: flex;
    align-items: center;
  }
  & input {
    margin: 0 0.5rem 0;
  }
`

const TextArea = styled.textarea`
  width: max(80%, 45rem);
  font-family: Arial, Helvetica, sans-serif;
  height: 5rem;
`

const Button = styled.button`
  padding: 1rem;
  background-color: orange;
  align-self: center;
  font-weight: 700;
  border: none;
  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    transform: translateY(-2px);
  }
`

export default function PizzaForm() {
  const [specialInstructions, setSpecialInstructions] = React.useState('')
  const [
    toppingsUnderInstructions,
    setToppingsUnderInstructions
  ] = React.useState(false)
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'all'
  })
  const onSubmit = data =>
    axios
      .post('https://reqres.in/api/users', data)
      .then(response => console.log(response.data))
      .catch(console.error)

  React.useEffect(() => {
    setToppingsUnderInstructions(
      [
        'cheese',
        'pineapple',
        'spinach',
        'artichoke hearts',
        'sundried tomatoes',
        'goat cheese',
        'red onion',
        'green pepper',
        'red pepper',
        'banana peppers',
        'cream cheese'
      ].some(topping => specialInstructions.includes(topping))
    )
  }, [specialInstructions])

  return (
    <>
      <Title>Build Your Own Pizza</Title>
      <Img imageUrl="https://cdnimg.webstaurantstore.com/images/articles/42/pizzeria-header.jpg" />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Choice of Size</h2>

        <select name="size" ref={register}>
          <option value="">--Please choose an option--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        {errors.size && <ErrorMessage>{errors.size.message}</ErrorMessage>}

        <h2>Choose a Base</h2>
        <select name="base" ref={register({ required: true })}>
          <option value="">--Please choose an option--</option>
          <option value="pomodoro">pomodoro</option>
          <option value="garlic olive oil">garlic olive oil</option>
          <option value="basil pesto">basil pesto</option>
        </select>
        {errors.base && <ErrorMessage>{errors.base.message}</ErrorMessage>}

        <h2>Add Toppings</h2>
        <Toppings className="toppings">
          <label>
            <input type="checkbox" name="pineapple" ref={register} />
            pineapple
          </label>

          <label>
            <input type="checkbox" name="spinach" ref={register} />
            spinach
          </label>

          <label>
            <input type="checkbox" name="artichokeHearts" ref={register} />
            artichoke hearts
          </label>

          <label>
            <input type="checkbox" name="sundriedTomatoes" ref={register} />
            sundried tomatoes
          </label>

          <label>
            <input type="checkbox" name="goatCheese" ref={register} />
            goat cheese
          </label>

          <label>
            <input type="checkbox" name="redOnion" ref={register} />
            red onion
          </label>

          <label>
            <input type="checkbox" name="greenPeppers" ref={register} />
            green pepper
          </label>

          <label>
            <input type="checkbox" name="redPeppers" ref={register} />
            red pepper
          </label>

          <label>
            <input type="checkbox" name="bananaPeppers" ref={register} />
            banana peppers
          </label>

          <label>
            <input type="checkbox" name="creamCheese" ref={register} />
            cream cheese
          </label>
        </Toppings>

        <h2> Special Instructions</h2>
        <TextArea
          value={specialInstructions}
          onChange={e => setSpecialInstructions(e.target.value)}
          name="specialInstructions"
          ref={register}
        />
        {toppingsUnderInstructions && (
          <p style={{ margin: '0' }}>
            * do not add toppings here, some special intructions could result in
            an increase of price after checkout
          </p>
        )}
        <h2>Contact Information</h2>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" ref={register} />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <br />
        <label htmlFor="name">name</label>
        <input type="text" name="name" id="name" ref={register} />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        {errors.name && <ErrorMessage>{errors.name.min}</ErrorMessage>}
        <br />
        <Button type="submit">Order Now</Button>
      </Form>
    </>
  )
}
