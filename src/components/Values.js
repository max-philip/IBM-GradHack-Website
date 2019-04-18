import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class InfoCards extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          <img src={require("../images/teamwork.svg")} 
            style={{width:"40%", display: "block", margin:"auto"}}
          />
          <Card.Body>
            <Card.Title className="info-title">Unite to get it done now</Card.Title>
            
          </Card.Body>
        </Card>
        <Card>
        <img src={require("../images/bulb1.svg")} 
            style={{width:"40%", display: "block", margin:"auto"}}
          />
            <Card.Body>
            <Card.Title className="info-title">Dare to create original ideas</Card.Title>
            
          </Card.Body>
        </Card>
        <Card>
        <img src={require("../images/brain.svg")} 
            style={{width:"40%", display: "block", margin:"auto"}}
          />
          <Card.Body>
            <Card.Title className="info-title">Show personal interest</Card.Title>
            
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
