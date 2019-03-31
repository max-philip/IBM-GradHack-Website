import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class Examples extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>project idea 1</h4><br />
                <h4>project idea 2</h4><br />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
             <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>project idea 3</h4><br />
                <h4>project idea 4</h4><br />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
             <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>project idea 5</h4><br />
                <h4>project idea 6</h4><br />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
