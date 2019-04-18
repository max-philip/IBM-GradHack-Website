import React, { Component } from 'react'

import Heading from './Heading'


export default class Schedule extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#B1EDEC", height: "100%", padding: "25px" }}>
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "992px"}}>


        <div style={{color: "white"}}>
          <Heading title="SCHEDULE"/>
        </div>

        <img 
                style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
                src={require("../images/schedule2.png")}
              />
        
      </div>
      </div>
    )
  }
}
