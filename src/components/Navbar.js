import React from "react"
import { NavLink, } from "react-router-dom"
import { Menu, Segment,} from 'semantic-ui-react'

const Navbar  = () =>

  <Segment inverted>
      <Menu inverted pointing secondary >
        <Menu.Item >
          <NavLink
            exact
            to="/"
            activeStyle={styles.active}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            exact
            to="/about"
            activeStyle={styles.active}>
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/projects"
            activeStyle={styles.active}>
            Projects
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/contact"
            activeStyle={styles.active}>
            Contact Me
          </NavLink>
        </Menu.Item>
      </Menu>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          
        }}>
      </div>
      </div>  
        
    </Segment>
  


// const Aaa = styled.nav`
//     background-color: #333; /* Black background color */
//     position: fixed; /* Make it stick/fixed */
//     top: 30px; /* Hide the navbar 50 px outside of the top view */
//     width: 100%; /* Full width */
//     transition: top 0.3s; /* Transition effect when sliding down (and up) */

//   &.a {
//     /* Style the navbar links */
//     float: left;
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 15px;
//     text-decoration: none;
//   }

//   &:hover {
//     background-color: #ddd;
//     color: black;
//   }

// `
const styles = {
  active: {
    color: '#AEAE94',
    fontWeight: 'bold',
  }
}
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementsByName("NavContainer").style.top = "0";
//   } else {
//     document.getElementByName("NavContainer").style.top = "-50px";
//   }
// }
export default Navbar

