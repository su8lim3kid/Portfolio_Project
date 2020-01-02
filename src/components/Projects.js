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
            color: "white",
            textShadow: "2px 2px #3299a8"}}
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
              Future Project 1
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
            Future Project 2
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
            Future Project 3
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
            Future Project 4 
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
            Future Project 5 
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
            Future Project 6
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