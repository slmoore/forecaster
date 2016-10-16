import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { coordinatesRequest } from '../Actions/index'

// Customize Field and Error Display
const renderInput = (field) => {
  const isError = field.meta.touched && field.meta.error
  return (
    <div>
      <div className="formError">
        {(isError) ? field.meta.error : null}
      </div>
      <h1>What's the weather in&nbsp;
        <input {...field.input} 
          type={field.type} 
          placeholder={field.placeholder} 
          className={(isError)?"inputError":null}
          />&nbsp;?
      </h1>
    </div>
  )
}

// Form Validation
const validate = (values) => {
  let errors = {}
  if (!values.location) {
    errors.location = 'Location is missing'
  }
  if (!(/^[a-z0-9, -]+$/i.test(values.location))) {
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
    document.activeElement.blur()
  }

  render () {
    const {handleSubmit} = this.props

    return (
      <form className="formLocation" onSubmit={handleSubmit(this.handleDispatch)}>
        <Field 
          name="location"
          label="Location"
          component={renderInput}
          type="text"
          placeholder="Reykjavik, Iceland" />
        <button className="btn btn-info" type="submit">{"Let's Find Out"}</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'Location',
  validate
})(Location)
