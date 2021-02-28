import React, { useState, useEffect } from 'react'
import PizzaForm from './PizzaForm'
import axios from 'axios'
import * as yup from 'yup'


const pizzaOrders = [
{name: 'Emily', email: 'emily@gmail.com', specialInstructions: '', size: '14inch'},
{name: 'Kait', email: 'kait@gmail.com', specialInstructions: '', size: '18inch'},
{name: 'Ethan', email: 'ethan@gmail.com', specialInstructions: '', size: '16inch'},
{name: 'Conner', email: 'conner@gmail.com', specialInstructions: '', size: '24inch'},
{name: 'Mason', email: 'mason@gmail.com', specialInstructions: 'extra sauce', size: '24inch'},
]

/////initial  states
const initialFormValues = {
    ///text inputs
    name: '',
    email: '',
    specialInstructions: '',

    ///dropdown
    size: '',

    ///checkboxes
    pineapple: '',
    pepperoni: '',
    sausage: '',
    sundriedTomatoes: '',
    goatCheese: '',
}

const intiialFormErrors = {
    name: '',
    email: '',
    specialInstructions: '',
    size: '',
}

const initialPizza = []
const initialDisabled = true

export default function Form() {

    const [pizza, setPizza] = useState(pizzaOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(intiialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

React.useEffect(() => {
  console.log(formValues)
 if(
   formValues.name!=='' &&
   formValues.email!=='' &&
   formValues.size!==''

 )
 setDisabled(false)
 else setDisabled(true)
}, [formValues])


const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      specialInstructions: formValues.email.trim(),
      size: formValues.size.trim(),
      toppings: ['pineapple', 'pepperoni', 'sausage', 'sunDriedTomatoes', 'goatCheese'].filter(topping => formValues[topping])
    }


    setPizza(pizza.concat(newPizza))
    setFormValues(initialFormValues);
  }

return(
    <div className= 'container'>
     Hi I am Pizza Form
     <PizzaForm 
    values={formValues}
    submit={submitForm}
    change={inputChange}
    disabled={disabled}
    errors={formErrors}
     />

    </div>
)
}

