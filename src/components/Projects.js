import React from 'react'
import { Header, Card, Image, Divider} from 'semantic-ui-react'
import fall from './Images/fall.jpeg'
import unnamed from './Images/unnamed.jpg'
import river from './Images/river.jpeg'
import lake from './Images/lake.jpg'
import magic from './Images/magic.jpeg'
import waterfall from './Images/waterfall.jpg'



 class Projects extends React.Component {
  render() {
    return (
      <>
      <br />
      
          <Header textAlign='left' 
          as="h1" 
          style={{
            fontFamily: "Jazz LET, fantasy", 
            color: "white"}}
            >My Projects</Header>
          <Divider />
          <Divider />
      
<Card.Group>
          <Card>
            <Image src={fall}
              style={{
                height: '200px',
                width: '300px',
              }}/>
          <Card.Content>
            <Card.Header>
              Project 1 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={lake} 
            style={{
              height: '200px',
              width: '300px',
            }}/>
          <Card.Content>
            <Card.Header>
              Project 2 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={waterfall}
            style={{
              height: '200px',
              width: '300px',
            }} />
          <Card.Content>
            <Card.Header>
              Project 3 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={magic}
            style={{
              height: '200px',
              width: '300px',
            }} />
          <Card.Content>
            <Card.Header>
              Project 4 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={unnamed} 
            style={{
              height: '200px',
              width: '300px',
            }}/>
          <Card.Content>
            <Card.Header>
              Project 5 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          <Card>
            <Image src={river}
            style={{
              height: '200px',
              width: '300px',
            }} />
          <Card.Content>
            <Card.Header>
              Project 6 Name
            </Card.Header>
            </Card.Content>
            <Card.Content extra >
           
              Project Description
            
              </Card.Content>
          </Card>

          </Card.Group>




        
      </>
    )
  }
}



export default Projects