import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'

import * as ConstClass from '../Const';


export default class Examples extends Component {
  render() {
    return (
      <CardGroup>
        <Card >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
            <Card.Text>
              <div className="example-text">
                {ConstClass.EXAMPLE_1}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
             <Card.Text>
             <div className="example-text">
                {ConstClass.EXAMPLE_2}
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body className="example-card">
             <Card.Text>
             <div className="example-text">
              {ConstClass.EXAMPLE_3}
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
