import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class Prizes extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          <Card.Img src={require("../images/google-home.jpg")} style={{width:"50%", display: "block", margin:"auto"}}/>
          <Card.Body>
            <Card.Title className="info-title">1st Place</Card.Title>
            <Card.Text>
              The winners get a [....] each!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
        <Card.Img src={require("../images/movie.png")} style={{width:"50%", display: "block", margin:"auto"}}/>
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
