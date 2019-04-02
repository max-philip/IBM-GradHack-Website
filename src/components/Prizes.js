import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class Prizes extends Component {
  render() {
    return (
      <div>

        <br />
        <div className="desc-para">
        Official prizes to be revealed soon...
        </div>
        <br />

      <CardGroup>
        <Card className="card">
          {/* <Card.Img src={require("../images/google-home.jpg")} style={{width:"250px", display: "block", margin:"auto"}}/> */}
          <Card.Body>
            <Card.Title className="info-title">1st Place</Card.Title>
            <Card.Text>
              The winners get a [TBD] each!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
        {/* <Card.Img src={require("../images/movie.png")} style={{width:"250px", display: "block", margin:"auto"}}/> */}
          <Card.Body>
            <Card.Title className="info-title">2nd Place</Card.Title>
            <Card.Text>
              The runners up get a [TBD] each!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <br /><br />
      <div className="desc-para">
        In addition to the two best teams getting their own special prizes, every hackathon participant will
        recieve a badge to recognise their efforts!
      </div>
      <br />

      <CardGroup>
      <Card className="card">
      <a href="https://www.youracclaim.com/org/ibm/badge/early-professional-hackathon">
        <Card.Img 
          src={require("../images/placehold_badge.png")} 
          style={{width:"200px", display: "block", margin:"auto"}}/>
        <Card.Body>
          <Card.Title className="info-title">Hackathon Badge</Card.Title>
          <Card.Text>
            Everyone gets one!
          </Card.Text>
        </Card.Body>
        </a>
      </Card>
    </CardGroup>
    </div>
    )
  }
}
