import React from 'react'
import {Header, Button, Image, Modal, Container, Divider} from 'semantic-ui-react'
import css3 from "./Images/css3.png"
import githubcat from "./Images/githubcat.png"
import html5 from "./Images/html5.png"
import iterm from "./Images/iterm.png"
import jquery from "./Images/jquery.png"
import postgresql from "./Images/postgresql.png"
import rails from "./Images/rails.png"
import Ruby from "./Images/Ruby.png"
import sass from "./Images/sass.png"
import pry from "./Images/pry.png"
import styled from 'styled-components'


class About extends React.Component {


  render() {
    return (
      
      <>
      <br/>
      <br/>
      <br/>
      <br/>

    <Container as='h1'
     textAlign='justified' 
     style={{
       fontFamily: "Jazz LET, fantasy",
       color: "white"
       }}>
      <b>A Bit About Me</b>
      <Divider />
      <p style={{
                fontSize: "20px",
                fontFamily: "Bookman, URW Bookman L, serif",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute, center',
                color: 'white',
              }}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
        tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
        imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
        ultricies nisi.
      </p>
      <Divider />
    
   
    </Container>
   
      <br/>
      <br/>
      <br/>
      
      <Modal trigger={<Button>My Tool Box</Button>} closeIcon>
        <ModalContainer>
   
    <Modal.Header style={{
      fontSize: "25px",
      fontFamily: "Snell Roundhand, cursive",
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position:'absolute, center',
      color: 'black',
    }}>Angel Alderete</Modal.Header>
    <Modal.Content>
      <br/>
      
      <Modal.Description>
        <Header  style={{
               
                fontSize: "40px",
                fontFamily: "Snell Roundhand, cursive",
                height: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute, center',
                color: 'black',
              }}>Tools I Work With</Header>

             
        <Image src={Ruby} 
        alt="Ruby" 
        as='a'
        size='large'
        href='https://www.ruby-lang.org/en/'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src={rails} 
        alt="rails"
        as='a'
        size='medium'
        href='https://rubyonrails.org/'
        target='_blank'
       />
        <br/>
        <br/>
      <Image src= {pry}
       alt="pryrails"
       as='a'
      size='medium'
      href='http://pryrepl.org/'
      target='_blank'
      />
        <br/>
        <br/>
        <Image src= {html5} 
        alt="html5"
        as='a'
        size='medium'
        href='https://www.w3schools.com/html/html5_intro.asp'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src= {css3} 
        alt="css3" 
        as='a'
        size='medium'
        href='https://www.w3.org/Style/CSS/'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src= {sass} 
        alt="sass" 
        as='a'
        size='medium'
        href='https://sass-lang.com/'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src= {iterm} 
        alt="iterm"
        as='a'
        size='medium'
        href='https://www.iterm2.com/'
        target='_blank'
         />
        <br/>
        <br/>
        <Image src= {jquery}
         alt="jquery"
         as='a'
        size='medium'
        href='https://jquery.com/'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src= {postgresql} 
        alt="postgresql"
        as='a'
        size='medium'
        href='https://www.postgresql.org/'
        target='_blank'
        />
        <br/>
        <br/>
        <Image src= {githubcat}
         alt="githubcat"
         as='a'
        size='medium'
        href='https://github.com/'
        target='_blank'
        />

      </Modal.Description>
    </Modal.Content>
   
  </ModalContainer>
  </Modal>
  
</>
    )
  }
}

const ModalContainer = styled.div `
background: #a8a8a8;
padding: 220px;
`

export default About


