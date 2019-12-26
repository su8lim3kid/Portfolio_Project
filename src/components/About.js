import React from 'react'
import {Header, Button, Image, Modal} from 'semantic-ui-react'
import css3 from "./Images/css3.png"
import githubcat from "./Images/githubcat.png"
import html5 from "./Images/html5.png"
import iterm from "./Images/iterm.png"
import jquery from "./Images/jquery.png"
import postgresql from "./Images/postgresql.png"
import rails from "./Images/rails.png"
import Ruby from "./Images/Ruby.png"
import sass from "./Images/sass.png"

class About extends React.Component {


  render() {
    return (
      
      <>
   
      <br/>
      <br/>
      <br/>
      <Modal trigger={<Button>My Tools</Button>} closeIcon>
   
    <Modal.Header>Angel Alderete</Modal.Header>
    <Modal.Content>
      
      <Modal.Description>
        <Header  as="h1" textAlign="center">Tools I Work With</Header>
        <Image src={Ruby} alt="Ruby" />
        <br/>
        <Image src={rails} alt="rails"/>
        <br/>
        <Image src= {html5} alt="html5"/>
        <br/>
        <Image src= {css3} alt="css3" />
        <br/>
        <Image src= {sass} alt="sass" />
        <br/>
        <Image src= {iterm} alt="iterm" />
        <br/>
        <Image src= {jquery} alt="jquery"/>
        <br/>
        <Image src= {postgresql} alt="postgresql"/>
        <br/>
        <Image src= {githubcat} alt="githubcat"/>

      </Modal.Description>
    </Modal.Content>
   
  </Modal>
</>
    )
  }
}

export default About


