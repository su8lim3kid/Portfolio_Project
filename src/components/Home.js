import React from "react";
import {  Grid, Image } from "semantic-ui-react";
import myImg from "./Images/meimg.JPG";
import slc from "./Images/slcimg.jpg";
import gh from "./Images/github.png";
import li from "./Images/lilogo.png";
import dpl from "./Images/Dpl.jpg"
import axe from "./Images/axe.jpg"
import "../styles/home.css";
import { Slide } from 'react-slideshow-image';

class Home extends React.Component {

  
  render() {
    const slideImages = [
      'Images/slide_2.jpg',
      'images/slide_3.jpg',
      'images/slide_4.jpg'
    ];
     
    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    }
    return (
      <>
  <div id='maincon'className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <Image src = {myImg} id='myImages'/>
              <div id="shadow"></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <Image src = {dpl} id='myImages'/>
            <div id="shadow"></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <Image src = {axe} id='myImages'/>
            <div id="shadow"></div>
            </div>
          </div>
        </Slide>
      </div>

        <Grid>
          {/* <Grid.Column mobile={32} tablet={32} computer={16}>
            <Image id="mainImg" src={myImg} />
            <div id="shadow1"></div>
            <h1 id="myName">Angel Alderete</h1>
          </Grid.Column> */}
          <Grid.Column mobile={16} tablet={8} computer={16}>
            <hr />
          <h1 id="myName">Angel Alderete</h1>
           
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image id="slcImg" src={slc} />
            <div id="slcText">Salt Lake City</div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
          <div class="intro">
             
              Hello, name is Angel, living in Salt Lake City, UT. I am a
              Mission-driven full stack developer with a passion for UI design,
              and collaboration. I’ve always sought out opportunities and
              challenges that are meaningful to me. I love Working hands on And
              taking pride in all of my work. 
            </div>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={16}>
            <hr />
            
          </Grid.Column>
          <Grid.Column mobile={32} tablet={8} computer={32}>
            <h2 id="gh"> Check Out Me Out On Github</h2>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image
              id="ghImg"
              src={gh}
              href="https://github.com/su8lim3kid"
              target="_blank"
            />
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={16}>
            <hr />
         
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Image id = 'liLogo' src={li} href="https://www.linkedin.com/in/angel-alderete/" target="_blank"/>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h2 id='li'>Add Me on Linkedin</h2>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={16}>
            <hr />
         
          </Grid.Column>
          
          <Grid.Column mobile={16} tablet={8} computer={16}>
            
        <section class="animation-box">
    <div class="first-text">Angel Alderete</div>
    <div class="second-text">Web Developer</div>
    <div class="third-text">enthusiastic, Outgoing, Fun!</div>
    <div class="fourth-text">Languages And Tools</div>
    <div class="fifth-text">Ruby On Rails</div>
    <div class="six-text">React.Js</div>
    <div class="seven-text">SQL</div>
    <div class="eight-text">Git</div>
    <div class="nine-text">json</div>
    <div class="ten-text">Jsx</div>
    <div class="eleven-text">Javascript</div>
    <div class="twelve-text">Html</div>
    <div class="thirteen-text">CSS</div>
  </section>
            </Grid.Column>
        </Grid>


        
      </>
    );
  }
}

export default Home;
