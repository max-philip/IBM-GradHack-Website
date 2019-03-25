import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class InfoCards extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          <img src={require("../images/node2.png")} 
            style={{width:"50%", display: "block", margin:"auto"}}
          />
          <Card.Body>
            <Card.Title className="info-title">Value 1</Card.Title>
            <Card.Text>
              Work on the problem that YOU want to solve. Develop new solutions to
              improve the graduate experience in the way you see fit!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
        <img src={require("../images/node2.png")} 
            style={{width:"50%", display: "block", margin:"auto"}}
          />
            <Card.Body>
            <Card.Title className="info-title">Value 2</Card.Title>
            <Card.Text>
              Take the opportunity to work as part of a team with skill sets that range
              across the board, from technical developers to presentation-savvy BAs (?), and
              everyone in between.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
        <img src={require("../images/node2.png")} 
            style={{width:"50%", display: "block", margin:"auto"}}
          />
          <Card.Body>
            <Card.Title className="info-title">Value 3</Card.Title>
            <Card.Text>
              Teams will have 24 hours to complete their hack. "blah blah blah blah blah".
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
