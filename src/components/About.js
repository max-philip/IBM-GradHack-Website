import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'

import Heading from './Heading'

export default class About extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFCC66", height: "100%", padding: "25px" }}>
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "992px"}}>

        <div style={{color: "#293856"}} >
        <Heading title="GOT ANY QUESTIONS?" color="black"/>
        </div>

        <div className="text">
          Feel free to reach out to the nerds behind this:
        </div>
        <br />
        
      <CardGroup >
        <Card className="card about-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Max Philip</Card.Title>
            <Card.Text>
            Max.Philip@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card about-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Christine Liu</Card.Title>
            <Card.Text>
            Christine.Liu1@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card about-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Matthew Cheah</Card.Title>
            <Card.Text>
            Matthew.Cheah@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card about-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Sarah Karim</Card.Title>
            <Card.Text>
            Sarah.Karim@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        
      </CardGroup>
      </div>
      </div>
    )
  }
}
