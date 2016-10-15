import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { coordinatesRequest } from '../Actions/index'

// Customize Field and Error Display
const renderInput = (field) => {
  return (
    <div>
      <label htmlFor={field.input.name}>{field.input.label}</label>
      <input {...field.input} type={field.type} placeholder={field.placeholder} />
        {field.meta.touched &&
         field.meta.error &&
         <div style={{color:"red"}}>{field.meta.error}</div>}
    </div>
  )
}

// Form Validation
const validate = (values) => {
  let errors = {}
  if (!values.location) {
    errors.location = 'Location is missing'
  }
  if (!(/^[a-z, ]+$/i.test(values.location))) {
    errors.location = 'Location is invalid'
  }
  return errors
}

// Location Form
class Location extends Component {
  constructor (props) {
    super(props)
    this.handleDispatch = this.handleDispatch.bind(this)
  }

  handleDispatch (formValues) {
    this.props.dispatch(coordinatesRequest(formValues))
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(this.handleDispatch)}>
        <Field 
          name="location"
          label="Location"
          component={renderInput}
          type="text"
          placeholder="Seattle, WA" />
        <button type="submit">{"Let's Find Out"}</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'Location',
  validate
})(Location)
