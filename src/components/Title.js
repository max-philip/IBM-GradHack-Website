import React, { Component } from 'react'

import '../styles/title.scss';

import SignUp from './SignUp'

export default class Title extends Component {
  render() {
    return (
      <div className="title-back">
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "992px"}}>

        <div className="titleBlock">
        IBM GRADHACK
        </div>

        <div className="dateTitle">
        June 14 - 17
        </div>

        <br />

        <div className="heading">
        A hackathon for technical and non-technical grads looking to innovate the graduate experience.

        <br /><br />

        <SignUp col="blue"/>
        <br />
        </div>
        </div>

      </div>
    )
  }
}
