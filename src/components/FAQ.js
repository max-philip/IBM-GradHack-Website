import React, { Component } from 'react'

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <div style={{display: "table", marginLeft: "auto", marginRight: "auto"}}>
        <div className="text" style={{textAlign: "left"}}>
          <ol>
            <li style={{fontWeight: "bold"}}>What if I don’t have a team? Can I still participate?</li>
            <p>Absolutely! Register as an individual and let us take it from there. Likewise if you have 
              an incomplete team (i.e. only 2 people). We will help match you up with other keen beans - 
              time to expand your network! </p>
            <br />
            <li style={{fontWeight: "bold"}}>Is it okay if no one on my team can code?</li>
            <p>Not a problem! We welcome all grads, regardless of background. There is no requirement 
              for solutions to be technical and you will not be disadvantaged at all. Have a look at
              some of the project examples above!</p>
            <br />
            <li style={{fontWeight: "bold"}}>What is the topic/ theme for the hackathon?</li>
            <p>“Innovating the graduate experience”</p>
            <br />
            <li style={{fontWeight: "bold"}}>Is there a cost to participate?</li>
            <p>There is no entry fee, but you will need to bring/ purchase some food. There will be 
              some food and drink provided but not for all meals.</p>
            <br />
            <li style={{fontWeight: "bold"}}>What is the schedule for the hackathon?</li>
            <br />
            <img 
              style={{width:"100%", display: "block", margin:"auto", paddingBottom:"30px"}}
              src={require("../images/schedule.png")}
            />
          </ol>
          </div>
        </div>
        
      </div>
    )
  }
}
