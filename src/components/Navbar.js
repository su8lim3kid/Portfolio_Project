import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, Segment,} from 'semantic-ui-react';


const NavBar = () => (
  <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Item>
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
)


const styles = {
  active: {
    color: '#008080',
    fontWeight: 'bold',
  }
}

export default NavBar

