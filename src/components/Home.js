import React from 'react'
import { Container, Card, Image, } from 'semantic-ui-react'
import wings from './wings.png'




class Home extends React.Component{

  

  render() {

     return(
      
 
        <Container>
       
            <Card.Header
              style={{
                fontSize: "45px",
                fontFamily: "Luminari, fantasy",
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                color: 'white',
              }}>
              Angel Alderete
            </Card.Header>
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '120px',
                  width: '160px',
                }}
              
              img src={wings} alt="Wings" />
             </Card.Content>
             <br />
             <br />
             <Card.Content extra
              style={{
                lineHeight: "150%",
                fontSize: "20px",
                fontFamily: "Georgia, serif",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
                color: 'white',
              }}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Content>
             


        </Container>
       
        
        

      
     )

          
  }

}

export default Home