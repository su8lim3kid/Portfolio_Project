import React from 'react'
import { Container, Card, Image, } from 'semantic-ui-react'
import wings from './Images/wings.png'
import cloud from './Images/cloud.png'
import hex from './Images/hex.png'





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
                  width: '100vw',
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
                  width: '100vw',
                }}
              
            Image src={hex} alt="Hex" />
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
         Enim facilisis gravida neque convallis a cras. Augue lacus viverra vitae congue. Ac ut consequat semper viverra nam. Eget lorem dolor sed viverra ipsum nunc. Elit duis tristique sollicitudin nibh. Nisl purus in mollis nunc sed id semper risus. Dignissim convallis aenean et tortor at risus viverra. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Massa tempor nec feugiat nisl pretium. Quam pellentesque nec nam aliquam. Fermentum dui faucibus in ornare quam viverra orci. Rhoncus est pellentesque elit ullamcorper.
         <br />
         <br />

          Ipsum consequat nisl vel pretium lectus quam id leo in. Dui faucibus in ornare quam viverra. Mauris vitae ultricies leo integer. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Duis at consectetur lorem donec massa sapien faucibus et molestie. Consequat nisl vel pretium lectus quam id. Vitae sapien pellentesque habitant morbi tristique. In massa tempor nec feugiat nisl pretium fusce id velit. Condimentum lacinia quis vel eros donec ac. Sit amet risus nullam eget felis eget nunc. Posuere urna nec tincidunt praesent. Massa massa ultricies mi quis hendrerit dolor magna. Dictum sit amet justo donec. Ullamcorper morbi tincidunt ornare massa eget egestas.
            </Card.Content>


             
      </Container>
     
        

        
       
        
        

      
     )

          
  }

}

export default Home