import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'



export default class InfoCards extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Hack whatever you want</Card.Title>
            <Card.Text>
              Work on the problem that YOU want to solve. Develop your solutions to
              improve the graduate experience in the ways that you see fit!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Work as a team</Card.Title>
            <Card.Text>
              Take the opportunity to work as part of a team with skill sets that range
              across the board, from technical developers to presentation-savvy BAs, and
              everyone in between.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Create valuable outcomes</Card.Title>
            <Card.Text>
            Your team's idea could be considered for implementation as an internal project.
            Turn that idea you've been thinking of into a reality!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
