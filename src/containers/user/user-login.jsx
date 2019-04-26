import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { Formik } from 'formik'
import { FormField } from 'components/form/form-field'
import { meLoginActions } from 'store/me/actions'
import { baseSelector } from 'store/me/selectors'

const FORM_FIELDS_NAMES = {
  EMAIL: 'email',
  PASSWORD: 'password'
}

export const UserLoginView = ({ handleSubmitAction }) => {
  const initialValues = {
    [FORM_FIELDS_NAMES.EMAIL]: 'a123123@a.com', // TODO: remove
    [FORM_FIELDS_NAMES.PASSWORD]: '12345' // TODO: remove
  }

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
    handleSubmitAction(values)
  }, [handleSubmitAction])

  return (
    <Formik
      initialValues={initialValues}
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
        <form onSubmit={handleSubmit} className="form">
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

UserLoginView.propTypes = {
  handleSubmitAction: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  data: baseSelector
})

const mapDispatchToProps = dispatch => bindActionCreators({
  handleSubmitAction: meLoginActions.request
}, dispatch)

export const UserLogin = connect(mapStateToProps, mapDispatchToProps)(UserLoginView)
