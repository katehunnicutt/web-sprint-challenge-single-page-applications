import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
      const {name, value, type, checked} = evt.target
      const valueToUse = type === 'checked' ? checked : value
      change(name, valueToUse)
  }

  return(
    <form className= 'form container' onSubmit={onSubmit}>
    <div className= 'pizza form submit'>
      <button disabled={disabled}>submit</button>

      <div className= 'errors'> 
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.specialInstructions}</div>
        <div>{errors.size}</div>
      </div>

      <div className= 'inputs'>
        <label>Name
            <input 
              value={values.name}
              onChange={onChange}
              type='text'
              name='name'
            />
        </label>

        <label>email
            <input 
              value={values.email}
              onChange={onChange}
              type='text'
              name='email'
            />
        </label>

        <label>specialInstructions
            <input 
              value={values.specialInstructions}
              onChange={onChange}
              type='text'
              name='specialInstructions'
            />
        </label>

        <label>Size
            <select 
              value={values.size}
              onChange={onChange}
              name='size'
            >
              <option value=''>- Select a Size -</option>
              <option value='14inch'>14"</option>
              <option value='16inch'>16"</option>
              <option value='18inch'>18"</option>
              <option value='24inch'>24"</option>

            </select>
        </label>   
      </div>

      <div className='pizza checkboxes'>
        <h4>Toppings</h4>
        <label> pineapple
        <input 
            type='checkbox'
            name='pineapple'
            onChange={onChange}
            checked={values.pineapple}
          />
        </label>

        <label> pepperoni
        <input 
            type='checkbox'
            name='pepperoni'
            onChange={onChange}
            checked={values.pepperoni}
          />
        </label>

        <label> sausage
        <input 
            type='checkbox'
            name='sausage'
            onChange={onChange}
            checked={values.sausage}
          />
        </label>

        <label> sundriedTomatoes
        <input 
            type='checkbox'
            name='sundriedTomatoes'
            onChange={onChange}
            checked={values.sundriedTomatoes}
          />
        </label>

        <label> goatCheese
        <input 
            type='checkbox'
            name='goatCheese'
            onChange={onChange}
            checked={values.goatCheese}
          />
        </label>
      </div>
    </div>
    </form>
  )
}