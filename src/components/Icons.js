import React  from 'react'
import { Icon,  } from 'semantic-ui-react'
import { Link, } from 'react-router-dom';

function Icons(){



  function sayLinkdin() {
    alert('Linkdin!');
  }

 
return(


<>

   <Link to="/https://github.com/su8lim3kid"> <Icon circular inverted color='teal' name='github '/></Link>
   <Link to="/https://www.facebook.com/angel.alderete.374"> <Icon circular inverted color='teal' name='facebook official' /></Link>
    <Link> <Icon circular inverted color='teal' name='linkedin' onClick={sayLinkdin}/></Link>

   
  
</>


)
}

export default Icons