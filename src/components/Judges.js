import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'


export default class InfoCards extends Component {
  render() {
    return (
      <div>
        <div>
          A beautiful little sunset. The shadows are just like the highlights, but we're going in the opposite direction. Use what you see, don't plan it. You can't have light without dark. You can't know happiness unless you've known sorrow.
          We'll throw some happy little limbs on this tree. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. We start with a vision in our heart, and we put it on canvas. All you have to learn here is how to have fun.
        </div>
        <br />
      <CardGroup>
        <Card className="card">
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Mr. Judgeman</Card.Title>
            <Card.Text>
              Expert judge. Loves to judge things.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">Ms. Judgewoman</Card.Title>
            <Card.Text>
              Expert judge. Loves to judge things.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title className="info-title">THE Judge</Card.Title>
            <Card.Text>
              Mediocre judge. Doesn't mind judging things.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    )
  }
}
