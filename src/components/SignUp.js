import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import * as ConstClass from '../Const'

import '../styles/signup.scss'


export default class InfoCards extends Component {
  render() {
    return (
      // <div className="button-back">
        // <div className="responseButton-wrapper">
        <form action={ConstClass.LINK_SIGNUP} target="_blank">
          <button className="responseButton">
            SIGN UP
          </button>
          </form>
        // </div>
      // </div>
      
    )
  }
}
