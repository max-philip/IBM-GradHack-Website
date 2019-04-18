import React, { Component } from 'react'

import Heading from './Heading'
import InfoCards from './InfoCards'
import Examples from './Examples'

import '../styles/whatudo.scss'

export default class WhatUDo extends Component {
  render() {
    return (
      <div className="whatudo-back">
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1200px"}}>
          <div style={{color: "white"}}>
          {/* <Heading title="What will you be doing?"/> */}
          <Heading title="OK...BUT HOW?"/>
          </div>
          {/* <InfoCards /> */}
          <br />
          {/* <Heading title="Project Examples"/>
          <Examples />
          <br/><br /> */}

          <div className="white-text" style={{color: "white"}}>
        {/* Introducing IBM A/NZ's first ever graduate hackathon. This is a hackathon for grads by grads. We plan to bring together a diverse range of graduates of all backgrounds and skill sets, to collaborate and bring innovative ideas to life - fostering the next generation of IBM developers, thinkers and innovators. */}
        Register as an individual or form a team of 3-4 to:
        </div>

        <br /><br />

          <img 
                style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
                src={require("../images/do-graphic2.png")}
              />
          
        </div>
      </div>
    )
  }
}
