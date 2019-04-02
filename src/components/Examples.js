import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class Examples extends Component {
  render() {
    return (
      <CardGroup>
        <Card className="example-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>Joe, Steven and Sandy turn one of IBM’s elevators into moving
                  barista-made coffee. A mini cafe serving all IBM floors. They
                  research the effects of free coffee on employee morale and productivity,
                  and create a business case including a cost analysis and implementation
                  plan. Their presentation is even supported with a paper prototype with
                  Joe acting as the barista! Free coffee for employees!
                </h4>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="example-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
             <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>project idea 2
                  
                </h4>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="example-card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
             <Card.Text>
              <div style={{fontWeight: "bold"}}>
                <h4>project idea 3
                  
                </h4>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}
