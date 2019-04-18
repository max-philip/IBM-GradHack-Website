import React, { Component } from 'react'

import Values from './Values'

import '../styles/maininfo.scss'

import Heading from './Heading'
 


export default class MainInfo extends Component {
  render() {
    return (
      <div className="maininfo-back">

        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1200px"}}>
        <div style={{color: "#FFCC66"}} >
        <Heading title="WHAT THE HACK IS THIS?" color="black"/>
        </div>

        <div className="text">
        {/* Introducing IBM A/NZ's first ever graduate hackathon. This is a hackathon for grads by grads. We plan to bring together a diverse range of graduates of all backgrounds and skill sets, to collaborate and bring innovative ideas to life - fostering the next generation of IBM developers, thinkers and innovators. */}

        GRADHACK is an opportunity to create, collaborate and have fun by bringing together a 
        diverse range of technical and non-technical skills – fostering the next generation of 
        IBM developers, thinkers and innovators.
        <br /><br />
        
        This is your chance to bring imaginative and innovative ideas to life! So, join us today 
        in IBM GRADHACK – for grads, by grads.

        </div>
        <br /><br />
        <div style={{display: "table", marginLeft: "auto", marginRight: "auto"}}>
        <div className="text" style={{textAlign: "left"}}>
        {/* <b>
        Register as an individual or form a team of 3-4 to:
        </b>
        <br /><br />
        <ul>
          <li>identify a problem</li>
          <li>ideate a vision</li>
          <li>build your idea (an app, website, business plan or anything really!)</li>
          <li>pitch it</li>
          <li>earn a badge and win prizes</li>
        </ul> */}
        
        {/* <b>What is a Hackathon: </b>
        A hackathon is any event of any duration where people come together to solve problems with
        a "hack" with the freedom to work on whatever they want. 
        <br /><br />
        For this hackathon you will, in a teams of 3-4, work together to build your idea 
        (whether that be an app, website, business plan or anything really!) */}

        </div>
        </div>
        <br />
        <div className="text">
        <i><b>It's also a great chance for you to put some of our IBM 1-3-9 Practices on display!</b></i>
       

        </div>
        <br />
        <Values />
      </div>
      </div>
    )
  }
}
