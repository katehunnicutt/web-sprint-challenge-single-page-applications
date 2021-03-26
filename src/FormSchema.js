import * as yup from 'yup'

const formSchema = yup.object().shape({
  ///text input
  name: yup
    .string()
    .trim()
    .required('name is required')
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
  size: yup.string().oneOf(['small', 'medium', 'large'], 'Size is Required'),

  base: yup
    .string()
    .oneOf(
      ['pomodoro', 'garlic olive oil', 'basil pesto'],
      'please select a base'
    ),

  ///checkboxes
  pineapple: yup.boolean(),
  spinach: yup.boolean(),
  artichokeHearts: yup.boolean(),
  sundriedTomatoes: yup.boolean(),
  goatCheese: yup.boolean(),
  redOnion: yup.boolean(),
  greenPeppers: yup.boolean(),
  redPeppers: yup.boolean(),
  bananaPeppers: yup.boolean(),
  creamCheese: yup.boolean()
})

export default formSchema
