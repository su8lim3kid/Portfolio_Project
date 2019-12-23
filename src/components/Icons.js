import React  from 'react'
import { Icon,  } from 'semantic-ui-react'

function Icons(){

  function sayGithub() {
    alert('GitHub!');
  }

  function sayFacebook() {
    alert('Facebook!');
  }

  function sayLinkdin() {
    alert('Linkdin!');
  }

  function sayInstagram() {
    alert('Instagram!');
  }

return(

<>

    <Icon circular inverted color='teal' name='github basic icon' onClick={sayGithub} />
    <Icon circular inverted color='teal' name='facebook official'onClick={sayFacebook} />
    <Icon circular inverted color='teal' name='linkedin' onClick={sayLinkdin}/>
    <Icon circular inverted color='teal' name='instagram'onClick={sayInstagram} />
   
  
</>


)
}

export default Icons