import React, { Component } from 'react';
import './styles/App.scss';

import { Navbar, Nav, Card, CardGroup, Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';

import InfoCards from './components/InfoCards'

import Heading from './components/Heading'
import Examples from './components/Examples'

import MainInfo from './components/MainInfo'
import About from './components/About'

import Judges from './components/Judges'
import Prizes from './components/Prizes'

import SignUp from './components/SignUp'

class App extends Component {
  render() {
    return (
      <div className="bodyWrapper">

        <div className="titleBlock">
        IBM GradHack 2019
        </div>

        <div className="heading">
        Innovate the graduate experience.
        </div>

        <hr class="separator" />

        <hr class="separator separator--line" />

        <hr class="separator separator--dots" />


        <img 
        style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
        src={require("./images/hack_stock.png")}
        />
        
        <hr class="separator separator--line-thin" />
        <Heading title="What is IBM GradHack?"/>
        <MainInfo />
        <br/><br />


        <hr class="separator separator--line-thin" />
        <Heading title="What will you be doing?"/>
        <InfoCards />
        <br /><br /><br />
        <Heading title="Project Suggestions"/>
        <Examples />
        <br/><br />


        <hr class="separator separator--line-thin" />
        <Heading title="The Judges"/>
        <Judges />
        <br/><br />


        <hr class="separator separator--line-thin" />
        <Heading title="Prizes"/>
        <Prizes />
        <br/><br />

        <hr class="separator separator--line-thin" />
        <Heading title="Sign Up Now!"/>
        <SignUp />
        <br/><br />
        

        <hr class="separator separator--line-thin" />
        <Heading title="The Team"/>
        <About />
        
      </div>
    );
  }
}

export default App;
