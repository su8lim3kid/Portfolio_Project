import React from 'react'
import { Container, Card, Image, } from 'semantic-ui-react'
import wings from './wings.png'
import cloud from './cloud.png'





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
                  height: '500px',
                  width: '650px',
                }}
              
            Image src={wings} alt="Wings" />
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
            <br />
            <br />

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
             Si Vis Pacem Para Bellum
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
                  width: '1000px',
                }}
              
            Image src={cloud} alt="Cloud" />
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
                
                color: 'black',
              }}>
             Lobortis elementum nibh tellus molestie nunc. Eget dolor morbi non arcu risus quis. Vel facilisis volutpat est velit egestas dui id ornare arcu. Posuere ac ut consequat semper viverra. Risus sed vulputate odio ut. Adipiscing enim eu turpis egestas. Mauris ultrices eros in cursus turpis massa tincidunt dui. Ut porttitor leo a diam sollicitudin tempor id eu. Tincidunt ornare massa eget egestas. Nisl nunc mi ipsum faucibus vitae aliquet.
             <br />
             <br />


              Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Interdum velit laoreet id donec. Sem et tortor consequat id porta. Aenean pharetra magna ac placerat vestibulum lectus. Fermentum dui faucibus in ornare quam viverra orci sagittis. Et malesuada fames ac turpis. Vel pharetra vel turpis nunc eget lorem dolor. Lectus urna duis convallis convallis tellus id interdum velit. Proin nibh nisl condimentum id venenatis a condimentum vitae. Molestie ac feugiat sed lectus. Pulvinar elementum integer enim neque volutpat ac.
            </Card.Content>
             


        </Container>
        

        
       
        
        

      
     )

          
  }

}

export default Home