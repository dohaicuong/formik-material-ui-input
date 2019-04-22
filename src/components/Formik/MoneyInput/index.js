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

export const MuiMoneyInput = ({
  field, form,
  leadIcon, trailIcon,
  leadDom, trailDom,
  ...props
}) => (
  <TextField 
    variant='outlined'

    // Formik handling
    {...props} {...field}
    onChange={value => form.setFieldValue([field.name], value)}
    value={field.value}
    
    // Formik error handling
    error={Boolean(form.errors[field.name])}
    helperText={form.errors[field.name]}

    // Formatted input handling
    InputProps={{
      inputComponent: MoneyFormatInput,
      startAdornment:
        leadIcon ? <InputAdornment position='start'><Icon>{leadIcon}</Icon></InputAdornment> :
        leadDom ? <InputAdornment position='start'>leadDom</InputAdornment> :
        null,
      endAdornment:
        trailIcon ? <InputAdornment position='end'><Icon>{trailIcon}</Icon></InputAdornment> :
        trailDom ? <InputAdornment position='end'>trailDom</InputAdornment> :
        null
    }}
  />
)

export const MoneyFormatInput = ({ inputRef, onChange, ...props }) => (
  <NumberFormat {...props}
    getInputRef={inputRef}
    onValueChange={values => {
      onChange(values.value)  
    }}

    thousandSeparator
    prefix='$'
  />  
)