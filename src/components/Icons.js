import React  from 'react'
import { Image } from 'semantic-ui-react'
import { Container, } from "semantic-ui-react"
import github_logo from './Images/github_logo.png'
import facebook from './Images/facebook.png'
import linkdin from './Images/linkdin.png'
import styled from 'styled-components'




const Icons = () =>(
  

<IconContainer>


  <Container>

    <Image
    src={facebook}
    as='a'
    size='medium'
    href="https://www.facebook.com/angel.alderete.374"
    target='_blank'
    style={{
      height: '35px',
      width: '35px',
    }}
    />
    <br/>
    <br/>
   <Image
    src={github_logo}
    as='a'
    size='medium'
    href="https://github.com/su8lim3kid"
    target='_blank'
    style={{
      height: '40px',
      width: '40px',
    }}
    />
    <br/>
    <br/>
     <Image
    src={linkdin}
    as='a'
    size='medium'
    href='https://www.linkedin.com/in/angel-alderete/'
    target='_blank'
 
    style={{
      height: '35px',
      width: '35px',
    }}
    />
    </Container>
    </IconContainer>
  



)

const IconContainer = styled.div `
position: absolute;
left: 0px;
bottom: 0px;


`






export default Icons