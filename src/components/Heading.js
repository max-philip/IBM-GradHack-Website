import React, { Component } from 'react'

import '../styles/Heading.scss'

export default class Heading extends Component {

  render() {
    return (
      <div className="heading-wrapper">
            {this.props.title}
      </div>
    )
  }
}
