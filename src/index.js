import 'react-app-polyfill/ie9'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment'

import App from 'common/App'
import * as serviceWorker from 'common/serviceWorker'

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <App />
  </MuiPickersUtilsProvider>
, document.getElementById('root'))
serviceWorker.unregister()