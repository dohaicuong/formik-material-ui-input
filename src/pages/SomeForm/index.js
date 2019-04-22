import React, { Component } from 'react'
import { withFormik, Form } from 'formik'

import DateInput from 'components/Formik/DateInput'
import TimeInput from 'components/Formik/TimeInput'
import DateTimeInput from 'components/Formik/DateTimeInput'

import PhoneInput from 'components/Formik/PhoneInput'
import MoneyInput from 'components/Formik/MoneyInput'

import Button from '@material-ui/core/Button'

class SomeForm extends Component {
  render() {
    // const { handleSubmit, values } = this.props
    //<InlineDatePicker label="Basic example" value={this.state.selectedDate} onChange={this.handleDateChange} />
    return (
      <Form>
        <DateInput label='Date' name='date' />
        <TimeInput label='Time' name='time' />
        <DateTimeInput label='Date Time' name='datetime' />
        <br /><br />

        <PhoneInput label='Phone' name='phone' leadIcon='phone' required />
        <MoneyInput label='Money' name='money' required />

        <br /><br />
        <Button variant='contained' color='primary' size='large' type='submit'>Go</Button>
      </Form>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    date: undefined, time: undefined, datetime: undefined,
    phone: '', money: ''
  }),
  validate: (values, props) => {
    const errors = {}

//     if (!values.date) {
//       errors.date = 'Required'
//     }
// 
//     if (!values.time) {
//       errors.time = 'Required'
//     }
// 
//     if (!values.datetime) {
//       errors.datetime = 'Required'
//     }

      if(!values.phone) errors.phone = 'Required'
      if(values.phone.length !== 10) errors.phone = 'Phone need to have 10 numbers'

      if(!values.money) errors.money = 'Required'
      if(values.money > 999999999) errors.money = 'Maximum 999,999,999'

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'BasicForm',
})(SomeForm)