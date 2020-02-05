import React from 'react'
import {Header, Button, Image, Modal, Container, Divider, Icon} from 'semantic-ui-react'
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
     >
      <Header style={{
       fontFamily: "Jazz LET, fantasy",
       textShadow: "2px 3px #3299a8",
       color: "black"
       
       }}>A Bit About Me</Header>
      <Divider />
      <p style={{
                fontSize: "20px",
                fontFamily: "Bookman, URW Bookman L, serif",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute, center',
                color: 'black',
              }}>
       I enjoy skiing, hiking, and playing in league sports with friends in my free time.
       below you will find some of the tools I work with along with a link to resume.
      </p>
      <Divider />
    
   
    </Container>
   
      <br/>
      <br/>
      <Modal 
      trigger={
      <Button animated
      color='teal'>
        <Button.Content visible>Tool Box</Button.Content>
        <Button.Content hidden>
          <Icon name='wrench' size='large' />
        </Button.Content>
      </Button>
    } 
      closeIcon>
      <Mc>
   
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
<Divider />
      <br/>
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
              <Divider />
              <br />
              <br />

              <ModalContainer >
        <Image src={Ruby} 
        alt="Ruby" 
        as='a'
        size='medium'
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

  </ModalContainer>
      </Modal.Description>
    </Modal.Content>
  
  </Mc>
  </Modal>

      <Button animated
      href='https://drive.google.com/file/d/1WfPWXWhIUj5sB76ekMQn0ZYha67qkoDZ/view?usp=sharing'
      target='_blank'
      color='blue'
      >
      
        <Button.Content visible
        >My Resume</Button.Content>
        <Button.Content hidden>
          <Icon name='file code' size='large'/>
        </Button.Content>
      </Button>
  
      
    
  </>


    )
  }
}

const ModalContainer = styled.div `

    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 1000px;
  height:600px;
  align-content: space-evenly;
  justify-content: center;
 
`

const Mc = styled.div`
background: #4568a1;
`

export default About


