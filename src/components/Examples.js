import React, { Component } from 'react'

import { Card, CardGroup } from 'react-bootstrap'

import '../styles/card.scss'

import '../styles/example.scss'

import * as ConstClass from '../Const';

import Heading from './Heading'

import Modal from 'react-modal';



const customStyles = {
  content : {
    backgroundColor       : "white",
    fontSize              : "calc(12px + 0.4vw)",
  }
};



export default class Examples extends Component {

  constructor () {
    super();
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false
    };

    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleOpenModal3 = this.handleOpenModal3.bind(this);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal1 () {
    this.setState({ showModal1: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleOpenModal3 () {
    this.setState({ showModal3: true });
  }
  
  
  handleCloseModal () {
    this.setState({ showModal1: false, showModal2: false, showModal3: false });
  }

  render() {
    return (
      <div style={{ backgroundColor: "white", height: "100%", padding: "25px" }}>
        <div style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1200px"}}>


        <div style={{color: "#FFCC66"}}>
          <Heading title="HACK WHATEVER YOU WANT!"/>
        </div>

        <div className="text">
          Work on the problem that YOU want to solve. Your team's idea could be considered for implementation as an internal project. 
          Turn that idea you've been thinking of into a reality! Here are some ideas to get you thinking:
        </div>


      <CardGroup>
        <Card onClick={this.handleOpenModal1}>
          <Card.Body className="example-card">
            <Card.Text>
            <img className="example-img"
                style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
                src={require("../images/01-full.jpg")}
              />
              <div className="info-title">
              ELEVATOR COFFEE
              </div>
              <div className="example-text">
                Non-Technical Example
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={this.handleOpenModal2}>
          <Card.Body className="example-card">
             <Card.Text>
             <img className="example-img"
                style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
                src={require("../images/02-full.jpg")}
              />
              <div className="info-title">
              CYBERGAMES
              </div>
              <div className="example-text">
                Hybrid Example
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card onClick={this.handleOpenModal3}>
          <Card.Body className="example-card">
             <Card.Text>
             <img className="example-img"
                style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
                src={require("../images/03-full.jpg")}
              />
              <div className="info-title">
              EMERGENCY APP
              </div>
              <div className="example-text">
                Technical Example
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>

        <Modal 
          style={customStyles}
          isOpen={this.state.showModal1}
           contentLabel="Minimal Modal 1"
        >
        <button className="close-btn" onClick={this.handleCloseModal}>
              x
              </button>
              <br /><br />
              <div style={{fontSize: "35px", fontWeight: "bold", textAlign: "center"}}>
              ELEVATOR COFFEE
              </div>
              <div style={{fontSize: "20px", fontStyle: "italic", textAlign: "center"}}>
              Non-Technical Example
              </div>
              <img
                style={{width:"40%", display: "block", margin:"auto", 
                marginTop: "50px", paddingBottom:"30px"}}
                src={require("../images/01-full.jpg")}
              />
              <br />
              <div style={{width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
              {ConstClass.EXAMPLE_1}
              </div>
              <br />
              <button className="close-btn-BOT" 
              onClick={this.handleCloseModal}>
              Close Me
              </button>
        </Modal>
        <Modal 
          style={customStyles}
          isOpen={this.state.showModal2}
           contentLabel="Minimal Modal 2"
        >
        <button className="close-btn" onClick={this.handleCloseModal}>
              x
              </button>
              <br /><br />
              <div style={{fontSize: "35px", fontWeight: "bold", textAlign: "center"}}>
              CYBERGAMES
              </div>
              <div style={{fontSize: "20px", fontStyle: "italic", textAlign: "center"}}>
              Hybrid Example
              </div>
              <img
                style={{width:"40%", display: "block", margin:"auto", 
                marginTop: "50px", paddingBottom:"30px"}}
                src={require("../images/02-full.jpg")}
              />
              <br />
              <div style={{width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
              {ConstClass.EXAMPLE_2}
              </div>
              <br />
              <button className="close-btn-BOT" 
              onClick={this.handleCloseModal}>
              Close Me
              </button>
        </Modal>
        <Modal 
          style={customStyles}
          isOpen={this.state.showModal3}
           contentLabel="Minimal Modal 3"
        >
        <button className="close-btn" onClick={this.handleCloseModal}>
              x
              </button>
              <br /><br />
              <div style={{fontSize: "35px", fontWeight: "bold", textAlign: "center"}}>
              EMERGENCY APP
              </div>
              <div style={{fontSize: "20px", fontStyle: "italic", textAlign: "center"}}>
              Technical Example
              </div>
              <img
                style={{width:"40%", display: "block", margin:"auto", 
                marginTop: "50px", paddingBottom:"30px"}}
                src={require("../images/03-full.jpg")}
              />
              <br />
              <div style={{width: "80%", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
              {ConstClass.EXAMPLE_3}
              </div>
              <br />
              <button className="close-btn-BOT" 
              onClick={this.handleCloseModal}>
              Close Me
              </button>
        </Modal>
      </div>
    )
  }
}
