import React from 'react'
import { Field } from 'formik'
import { InlineDateTimePicker } from 'material-ui-pickers'
import TextField from '@material-ui/core/TextField'

export default props => (
  <Field component={DateTimeInput}
    {...props}
  />  
)

export const DateTimeInput = ({ field, form, ...rest }) => (
  <InlineDateTimePicker
    // Default styling
    variant='outlined'
    keyboard
    disableOpenOnEnter

    // Date format
    placeholder='DD/MM/YYYY hh:mm A'
    format='DD/MM/YYYY hh:mm A'
    mask={value =>
      // handle clearing outside if value can be changed outside of the component
      value ? [
        /\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/, " ",
        /\d/, /\d/, ":", /\d/, /\d/, " ", /a|p/i, "M",
      ] : []
    }

    // More
    // minDate, minDateMessage, maxDate, maxDateMessage

    // Formik Handling
    {...rest} {...field}
    value={field.value || null}
    onChange={value => form.setFieldValue([field.name], value)}

    // Custom Input Handling
    TextFieldComponent={props => <InputField {...props} field={field} form={form} />}
  />
)

const InputField = ({ form, field, ...props }) => {
  return (
    <TextField
      {...props}
      error={Boolean(form.errors[field.name])}
      helperText={form.errors[field.name]}
    />  
  )
}