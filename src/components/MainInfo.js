import React, { Component } from 'react'

import Values from './Values'

import '../styles/maininfo.scss'
 


export default class MainInfo extends Component {
  render() {
    return (
      <div>
        <div className="text">
        {/* Introducing IBM A/NZ's first ever graduate hackathon. This is a hackathon for grads by grads. We plan to bring together a diverse range of graduates of all backgrounds and skill sets, to collaborate and bring innovative ideas to life - fostering the next generation of IBM developers, thinkers and innovators. */}

        Welcome to IBM A/NZ’s first ever Graduate Hackathon – IBM GradHack!
        <br /><br />
        <b>So what the hack is a hackathon?</b><br/>
        
        A hackathon is an opportunity to create, collaborate and have fun, using a 
        diverse range of skills to bring imaginative and innovative ideas to life – fostering the 
        next generation of IBM developers, thinkers and innovators.
        So, join us today in IBM GradHack – for grads, by grads.

        </div>
        <br /><br />
        <div style={{display: "table", marginLeft: "auto", marginRight: "auto"}}>
        <div className="text" style={{textAlign: "left"}}>
        <b>
        Register as an individual or form a team of 3-4 to:
        </b>
        <br /><br />
        <ul>
          <li>identify a problem</li>
          <li>ideate a vision</li>
          <li>build your idea (an app, website, business plan or anything really!)</li>
          <li>pitch it</li>
          <li>earn a badge and win prizes</li>
        </ul>
        
        {/* <b>What is a Hackathon: </b>
        A hackathon is any event of any duration where people come together to solve problems with
        a "hack" with the freedom to work on whatever they want. 
        <br /><br />
        For this hackathon you will, in a teams of 3-4, work together to build your idea 
        (whether that be an app, website, business plan or anything really!) */}

        </div>
        </div>
        <br /><br /><br />
        <div className="text">
        <i><b>It's also a great chance for some of our IBM 1-3-9 Practices to be put on display!</b></i>
       

        </div>
        <br />
        <Values />
      </div>
    )
  }
}
