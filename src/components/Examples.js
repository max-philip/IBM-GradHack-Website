import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'

import * as ConstClass from '../Const';

import Heading from './Heading'



export default class Examples extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", padding: "25px" }}>
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "992px"}}>


        <div style={{color: "#FFCC66"}}>
          <Heading title="HACK WHATEVER YOU WANT!"/>
        </div>

        <div className="text">
          Work on the problem that YOU want to solve. Your team's idea could be considered for implementation as an internal project. 
          Turn that idea you've been thinking of into a reality! Here are some ideas to get you thinking:
        </div>


      <CardGroup>
        <Card >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
            <Card.Text>
              <div className="example-text">
                {ConstClass.EXAMPLE_1}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
             <Card.Text>
             <div className="example-text">
                {ConstClass.EXAMPLE_2}
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
             <Card.Text>
             <div className="example-text">
              {ConstClass.EXAMPLE_3}
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
      </div>
    )
  }
}
