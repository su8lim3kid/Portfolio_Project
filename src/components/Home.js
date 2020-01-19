import React from 'react'
import { Container, Card, Image, } from 'semantic-ui-react'
import wings from './Images/wings.png'
import cloud from './Images/cloud.png'





class Home extends React.Component{

  

  render() {

     return(
    
      <div class="sixteen wide mobile eight wide tablet four wide computer column">
        <Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
       
            <Card.Header
              style={{
                fontSize: "75px",
                fontFamily: "Luminari, fantasy",
                textShadow: "2px 3px #3299a8",
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute, center',
                color: 'white',
              }}>
            Angel
            </Card.Header>
            <Card.Header
              style={{
                fontSize: "75px",
                fontFamily: "Luminari, fantasy",
                textShadow: "2px 3px #3299a8",
                height: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position:'absolute, center',
                color: 'white',
              }}>
           Alderete
            </Card.Header>
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '420px',
                  width: '500px',
                }}
              
            Image src={wings} alt="Wings" />
             </Card.Content>
             <br />
             <br />
             <Card.Content extra
              style={{
                lineHeight: "150%",
                fontSize: "30px",
                fontFamily: "Georgia, serif",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                color: 'white',
              }}>
            Hello, name is Angel, living in Salt Lake City, UT 
            <br />
            <br />
            I am a
            Mission-driven full stack developer with a passion for UI design, and collaboration. 
            <br />
            <br />
            I’ve always sought out opportunities and challenges that are meaningful to me. I love Working hands on 
            And taking pride in all of my work. 
            <br />
            <br />
            My professional  career has taken a large turn from Industrial mechanic/production supervisor and now a web developer, 
            I strive to be the best at what I do no matter what field I am in.
            </Card.Content>
            <br />
            <br />
            <br />
            <br />

            <Card.Header
              style={{
                fontSize: "45px",
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                textDecoration: "underline",
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                color: 'white',
              }}>
          Code
            </Card.Header>
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '400px',
                  width: '100vw',
                }}
              
            Image src={cloud} alt="Cloud" />
             </Card.Content>
             <br />
             <br />
             <Card.Content extra
              style={{
                lineHeight: "150%",
                fontSize: "30px",
                fontFamily: "Georgia, serif",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                color: 'white',
              }}>
            As a web developer, I enjoy using my attention to detail, my love for making things work, and my mission-driven work ethic to bring your ideas to life. That's why I’m excited to make a big impact at a high growth company.
            <br />
            <br/>
            I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </Card.Content>
            <br />
            <br />
            <br />
            <br />       
      </Container>
     
        

        
       
        </div>
        

      
     )

          
  }

}

export default Home