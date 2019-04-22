import React from 'react'
import { Field } from 'formik'
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'

export default props => {
  return (
    <Field component={MuiMoneyInput}
      {...props}
    />
  )
}

export const MuiMoneyInput = ({ field, form, ...props }) => {
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
        inputComponent: MoneyFormatInput,
        startAdornment: <InputAdornment position='start'><Icon>attach_money</Icon></InputAdornment>
      }}
    />
  )
}

export const MoneyFormatInput = ({ inputRef, onChange, ...props }) => (
  <NumberFormat {...props}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange(values.value)  
    }}

    allowNegative={false}
    decimalScale={0}
    thousandSeparator
  />  
)