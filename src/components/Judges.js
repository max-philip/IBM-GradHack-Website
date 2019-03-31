import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class InfoCards extends Component {
  render() {
    return (
      <div>
        <div>
          Our judges will be tasked with deciding which "hacks" and ideas are the best of the bunch. They
          will be paying close attention to [...], [...] and [...], so do your best to get these right!
        </div>
        <br />
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Judge 1</Card.Title>
            <Card.Text>
              [judge info]
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Judge 2</Card.Title>
            <Card.Text>
              [judge info]
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Judge 3</Card.Title>
            <Card.Text>
              [judge info]
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    )
  }
}
