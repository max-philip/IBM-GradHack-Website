import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class Prizes extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">1st Place</Card.Title>
            <Card.Text>
              The winners get a [....] each!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">2nd Place</Card.Title>
            <Card.Text>
              The runners up get a [....] each!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
