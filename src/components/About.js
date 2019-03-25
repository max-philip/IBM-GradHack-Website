import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class About extends Component {
  render() {
    return (
      <div>
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Max Philip</Card.Title>
            <Card.Text>
            Max.Philip@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Christine Liu</Card.Title>
            <Card.Text>
            Christine.Liu1@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Matthew Cheah</Card.Title>
            <Card.Text>
            Matthew.Cheah@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Sarah Karim</Card.Title>
            <Card.Text>
            Sarah.Karim@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Jarry Chen</Card.Title>
            <Card.Text>
            Jarry.Chen@ibm.com
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    )
  }
}
