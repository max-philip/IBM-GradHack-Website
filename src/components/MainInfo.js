import React, { Component } from 'react'

import Values from './Values'

import '../styles/maininfo.scss'
 


export default class MainInfo extends Component {
  render() {
    return (
      <div>
        <div className="text">
        We are IBM A/NZ's first graduate hackathon community. This is a Hackathon by Grads for Grads
        to solve issues Grads face. We plan to bring together a diverse range of graduates of all
        backgrounds and skillsets, to collaborate and bring innovative ideas to life - fostering
        the next generation of IBM developers, thinkers and innovators.

        </div>
        <br /><br />
        <div className="text">
        <b>What is a Hackathon: </b>
        A hackathon is any event of any duration where people come together to solve problems with
        a "hack" with the freedom to work on whatever they want. 
        <br /><br />
        For this hackathon you will, in a teams of 3-4, work together to build your idea 
        (whether that be an app, website, business plan or anything really!)

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
