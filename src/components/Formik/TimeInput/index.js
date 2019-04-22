import React from 'react'
import { Field } from 'formik'
import { InlineTimePicker } from 'material-ui-pickers'
import AlarmIcon from '@material-ui/icons/AddAlarm'
import TextField from '@material-ui/core/TextField'

export default props => (
  <Field component={TimeInput}
    {...props}
  />  
)

export const TimeInput = ({ field, form, ...rest }) => (
  <InlineTimePicker
    // Default styling
    variant='outlined'
    keyboard
    disableOpenOnEnter
    keyboardIcon={<AlarmIcon />}

    // Date format
    placeholder='HH:MM AM/PM'
    mask={value =>
      // handle clearing outside if value can be changed outside of the component
      value ? [/\d/, /\d/, ":", /\d/, /\d/, " ", /a|p/i, "M"] : []
    }

    // More
    // minDate, minDateMessage, maxDate, maxDateMessage

    // Formik Handling
    {...rest} {...field}
    value={field.value || null}
    onChange={value => form.setFieldValue([field.name], value)}

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