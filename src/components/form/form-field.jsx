import './form-field.scss'

import React from 'react'
import PropTypes from 'prop-types'

export const FormField = ({
  type = 'text',
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  uid,
  label,
  placeholder
}) => {
  const hasError = touched[uid] && errors[uid]

  return (
    <div className={`form-field ${hasError ? 'form-field__has-error' : ''}`}>
      <label htmlFor={uid}>
        {label && <span className="form-field--label">{label}</span>}
        <input
          className="form-field--input"
          placeholder={placeholder}
          type={type}
          id={uid}
          name={uid}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[uid]}
        />
      </label>
      {
        hasError && <div className="form-field--error">{errors[uid]}</div>
      }
    </div>
  )
}

FormField.propTypes = {
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string
}
