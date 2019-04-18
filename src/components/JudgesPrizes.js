import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import Heading from './Heading'

import '../styles/card.scss'


export default class JudgesPrizes extends Component {
  render() {
    return (
      <div>

        <CardGroup style={{maxWidth: "1200px", marginLeft: "auto", marginRight: "auto"}}>
          <Card >
            <Card.Body className="judge-card">
              <Card.Text>
                <div style={{color: "#FFCC66"}}>
                  <Heading title="HOW DO I WIN?"/>
                </div>
                <div className="text">
                Our judges will be tasked with deciding which "hacks" and ideas are 
                the best of the bunch. They will be paying close attention to creativeness, 
                usefulness, feasibility, and presentation effectiveness, so do your best 
                to get these right!
                </div>
                <br /><br />
                <div className="text">
                Judges will be revealed soon...
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card >
            <Card.Body className="prize-card">
              <Card.Text>
                <div style={{color: "#FFCC66"}}>
                  <Heading title="WHAT DO I WIN?"/>
                </div>
                <a href="https://www.youracclaim.com/org/ibm/badge/early-professional-hackathon" target="_blank">
                <img
                  src={require("../images/badge2.png")} 
                  style={{width:"175px", display: "block", margin:"auto", padding: "10px"}}/>
                </a>
                <br />
                <div className="text">
                Official prize to be revealed soon...
                </div>
                <br /><br />
                <div className="text">
                In addition to the members of the winning team getting their own special 
                prize, <b>every</b> hackathon participant will receive a badge to recognise 
                their efforts.

                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        
      </div>
    )
  }
}
