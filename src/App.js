import React, { Component } from 'react';
import './styles/App.scss';

import { Navbar, Nav, Card, CardGroup, Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';


import WhatUDo from './components/WhatUDo'

import Examples from './components/Examples'

import MainInfo from './components/MainInfo'
import About from './components/About'

import JudgesPrizes from './components/JudgesPrizes'

import SignUp from './components/SignUp'

import Schedule from './components/Schedule'

import Title from './components/Title'

class App extends Component {
  
  render() {
    return (
      <div className="bodyWrapper">

      
        <Title />
        {/* <hr class="separator" /> */}

        {/* <hr class="separator separator--line" /> */}

        {/* <hr class="separator separator--dots" /> */}


        {/* <img 
        style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
        src={require("./images/hack_stock.png")}
        /> */}

        
        {/* <hr class="separator separator--line" /> */}
        {/* <hr class="separator separator--line-thin" /> */}
        <MainInfo />
        <br/><br />


        {/* <hr class="separator separator--line-thin" /> */}
        <WhatUDo />

        {/* <hr class="separator separator--line-thin" /> */}
        <Examples />

       




        {/* <hr class="separator separator--line-thin" /> */}
        <Schedule />


        {/* <hr class="separator separator--line-thin" /> */}
        <JudgesPrizes />




        {/* <hr class="separator separator--line-thin" />
        <Heading title="The Judges"/>
        <Judges />
        <br/><br />


        <hr class="separator separator--line-thin" />
        <Heading title="Prizes"/>
        <Prizes />
        <br/><br /> */}

        {/* <hr class="separator separator--line-thin" />
        <Heading title="FAQ"/>
        <FAQ />
        <br /> */}

        {/* <hr class="separator separator--line-thin" /> */}
        <div style={{backgroundColor: "#404040"}}>
        <br /><br /><br />
        <div className="text" style={{color: "white"}}>
        If you’re still not convinced, well…there’s free food!
        </div>
        <br /><br />
        <SignUp col="orange"/>
        <br/><br /><br /><br />
        </div>

        

        {/* <hr class="separator separator--line-thin" /> */}
        <About />
        
      </div>
    );
  }
}

export default App;
