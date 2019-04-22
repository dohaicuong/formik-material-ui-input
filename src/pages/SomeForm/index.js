import React, { Component } from 'react'
import { withFormik, Form } from 'formik'

import DateInput from 'components/Formik/DateInput'
import TimeInput from 'components/Formik/TimeInput'
import DateTimeInput from 'components/Formik/DateTimeInput'

import PhoneInput from 'components/Formik/PhoneInput'
import MoneyInput from 'components/Formik/MoneyInput'
import PostcodeInput from 'components/Formik/PostcodeInput'

import EditorInput from 'components/Formik/EditorInput'
import { EditorState } from 'draft-js'

import Button from '@material-ui/core/Button'

class SomeForm extends Component {
  render() {
    const { handleBlur, setFieldValue, values } = this.props
    //<InlineDatePicker label="Basic example" value={this.state.selectedDate} onChange={this.handleDateChange} />
    return (
      <Form>
        <DateInput label='Date' name='date' />
        <TimeInput label='Time' name='time' />
        <DateTimeInput label='Date Time' name='datetime' />
        <br /><br />

        <PhoneInput label='Phone' name='phone' leadIcon='phone' required />
        <MoneyInput label='Money' name='money' required />
        <PostcodeInput label='Postcode' name='postcode' leadIcon='location_on' required />
        <br /><br />

        <EditorInput name='editor' />
        <br /><br />

        <Button variant='contained' color='primary' size='large' type='submit'>Go</Button>
      </Form>
    )
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    date: undefined, time: undefined, datetime: undefined,
    phone: '', money: '', postcode: '',
    editor: new EditorState.createEmpty()
  }),
  validate: (values, props) => {
    const errors = {}

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