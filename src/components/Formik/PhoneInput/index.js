import React from 'react'
import { Field } from 'formik'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'

export default props => {
  return (
    <Field component={MuiPhoneInput}
      {...props}
    />
  )
}

export const MuiPhoneInput = ({
  field, form,
  leadIcon, trailIcon,
  leadDom, trailDom,
  ...props
}) => {
  const isError = Boolean(form.dirty && form.touched[field.name] && form.errors[field.name])

  return (
    <TextField 
      variant='outlined'

      // Formik handling
      {...props} {...field}
      onChange={value => form.setFieldValue([field.name], value)}
      value={field.value}
      
      // Formik error handling
      error={isError}
      helperText={isError && form.errors[field.name]}

      // Formatted input handling
      InputProps={{
        inputComponent: PhoneFormatInput,
        startAdornment:
          leadIcon ? <InputAdornment position='start'><Icon>{leadIcon}</Icon></InputAdornment> :
          leadDom ? <InputAdornment position='start'>leadDom</InputAdornment> :
          null,
        endAdornment:
          trailIcon ? <InputAdornment position='end'><Icon>{trailIcon}</Icon></InputAdornment>: 
          trailDom ? <InputAdornment position='end'>trailDom</InputAdornment> :
          null
      }}
    />
  )
}

export const PhoneFormatInput = ({ inputRef, onChange, ...props }) => (
  <NumberFormat {...props}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange(values.value)  
    }}
    format='##########'
  />  
)