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
          {this.props.col === "orange" ? 
            <button style={{backgroundColor: "#FFCC66"}} className="responseButton">
            Register Now!
          </button>
          :
          <button style={{backgroundColor: "#5CD9D6"}} className="responseButton">
            Register Now!
          </button>
        }
          </form>
        // </div>
      // </div>
      
    )
  }
}
