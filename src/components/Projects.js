import React from 'react'
import { Header, Card, Image, Divider} from 'semantic-ui-react'
import dpl from './Images/dpl_logo.png'
import bb from './Images/bblogo.jpeg'
import mslogo from './Images/ms_logo.png'



 class Projects extends React.Component {
  render() {
    return (
      <>
      <br />
      
          <Header textAlign='left' 
          as="h1" 
          style={{
            fontFamily: "Jazz LET, fantasy", 
            color: "white",
            textShadow: "2px 2px #3299a8"}}
            >My Projects</Header>
          <Divider />
          <Divider />
      
<Card.Group>
          <Card href='https://github.com/devpointlabs/devpoint-store' target='_blank'>
            <Image src={dpl}
              style={{
                height: '200px',
                width: '300px',
              }}/>
          <Card.Content>
            <Card.Header>
              DevPoint Labs Online Store
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           This is an e-commerce project i participated in during my time at Devpoint Labs cohort!
              </Card.Content>
          </Card>

          <Card href='https://github.com/su8lim3kid/Myspace_user_auth' target='_blank'>
            <Image src={mslogo} 
            style={{
              height: '200px',
              width: '300px',
            }}/>
          <Card.Content>
            <Card.Header>
            MySpace Clone
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
          Mysapce clone project with Authentication
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={bb}
            style={{
              height: '200px',
              width: '300px',
            }} />
          <Card.Content>
            <Card.Header>
            BillBoard Project
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              quick project i did with full crud actions
            
              </Card.Content>
          </Card>

          </Card.Group>




        
      </>
    )
  }
}



export default Projects