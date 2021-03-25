import React from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  ///text input
  name: yup
    .string()
    .trim()
    .required('Name')
    .min(2, 'Name must be at least two characters long'),
  email: yup
    .string()
    .email('must be a valid email address')
    .required('email address is required'),
  specialInstructions: yup
    .string()
    .trim()
    .required(
      'do not add toppings here. some special intructions could result in an increase of price after checkout'
    ),

  ///drop down
  size: yup
    .string()
    .oneOf(['14inch', '16inch', '18inch', '24inch'], 'Size is Required'),

  ///checkboxes
  pineapple: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  sundriedTomatoes: yup.boolean(),
  goatCheese: yup.boolean()
})

export default formSchema
