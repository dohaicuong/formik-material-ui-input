import React from 'react'
import { Field } from 'formik'
import { InlineDatePicker } from 'material-ui-pickers'
import TextField from '@material-ui/core/TextField'

export default props => {
  return (
    <Field component={DateInput}
      {...props}
    />
  )
}

export const DateInput = ({ field, form, ...rest }) => {
  return (
    <>
      <InlineDatePicker
        // Default styling
        variant='outlined'
        keyboard
        clearable
        disableOpenOnEnter
        animateYearScrolling={false}

        // Date format
        format='DD/MM/YYYY'
        placeholder='DD/MM/YYYY'
        mask={value =>
          // handle clearing outside if value can be changed outside of the component
          value ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/] : []
        }

        // More
        // minDate, minDateMessage, maxDate, maxDateMessage

        // Formik Handling
        {...rest} {...field}
        value={field.value || null}
        onChange={value => form.setFieldValue([field.name], value)}

        TextFieldComponent={props => <InputField {...props} field={field} form={form} />}
      />
    </>
  )
}

const InputField = ({ form, field, ...props }) => {
  return (
    <TextField
      {...props}
      error={Boolean(form.errors[field.name])}
      helperText={form.errors[field.name]}
    />  
  )
}