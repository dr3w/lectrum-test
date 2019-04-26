import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { FormField } from 'components/form/form-field'

const FORM_FIELDS_NAMES = {
  EMAIL: 'email',
  PASSWORD: 'password'
}

export const UserLogin = () => {
  const validate = useCallback((values) => {
    const errors = {}

    if (!values[FORM_FIELDS_NAMES.EMAIL]) {
      errors[FORM_FIELDS_NAMES.EMAIL] = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values[FORM_FIELDS_NAMES.EMAIL])
    ) {
      errors[FORM_FIELDS_NAMES.EMAIL] = 'Invalid email address'
    }

    if (!values[FORM_FIELDS_NAMES.PASSWORD]) {
      errors[FORM_FIELDS_NAMES.PASSWORD] = 'Required'
    }

    return errors
  }, [])

  const onSubmit = useCallback((values, { setSubmitting }) => {
    console.log('submit', values, setSubmitting)
  }, [])

  return (
    <Formik
      initialValues={{
        [FORM_FIELDS_NAMES.EMAIL]: '',
        [FORM_FIELDS_NAMES.PASSWORD]: ''
      }}
      validate={validate}
      onSubmit={onSubmit}
      noValidate
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <FormField
            placeholder="Email"
            uid={FORM_FIELDS_NAMES.EMAIL}
            {...{
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }}
          />
          <FormField
            placeholder="Password"
            uid={FORM_FIELDS_NAMES.PASSWORD}
            {...{
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }}
          />

          <button type="submit" disabled={isSubmitting} className="btn">
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}
