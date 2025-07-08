import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg3 from "../assets/img/coffee_cup.png";
 import projImg2 from "../assets/img/Spotify.png";
 import projImg1 from "../assets/img/Unity.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // const projectsP = <p>Here are a few of my favorite projects, 
  //   which have significantly contributed to my learning and hands-on experience. 
  //   You may explore more of my work on my GitHub profile.</p>
  const projectsP = <p></p>


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                {projectsP}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <Col size={12} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={projImg1}  alt="PROJ IMG"/>
                          <div className="proj-txtx">
                          <a href="https://github.com/mahhree?tab=repositories" target="_blank" rel="noopener noreferrer"><h4>GitHub Code</h4></a>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>3D Video Game</h3>
                          <p>My game, developed in Unity and powered by C#, combines custom designs crafted with Asset Forge and 
                            Unity Assets to create unique models. My game showcases various aspects of game development, 
                            including game math, collision detection, physics, 3D graphics, and animations. 
                            The game is set in a forest maze, following a gripping horror theme and enhanced by ominous sounds 
                            that heighten the suspenseful gaming experience. 
                            Players navigate with straightforward controls for movement, interactions, and weapon usage.
                          </p>
                        </span>
                      </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      <Col size={12} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={projImg2} alt="PROJ IMG"/>
                          <div className="proj-txtx">
                          <a href="https://github.com/mahhree/SpotifyMLGroupProject" target="_blank" rel="noopener noreferrer"><h4>GitHub Code</h4></a>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>Spotify API</h3>
                          <p>I formed a machine learning model to predict how new songs will perform on 
                            Spotify's top charts by finding correlations between genre, danceability, 
                            beats per minute, and other datasets about each title. 
                            The project utilizes Spotify's API, Python, and 
                            supported libraries such as Pandas and NumPy. Feel free to check out the code on GitHub!</p>
                        </span>
                      </Col>
                    </Row>                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <Col size={12} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={projImg3} alt="PROJ IMG"/>
                          <div className="proj-txtx">
                          <a href="https://github.com/mahhree/my-portfolio" target="_blank" rel="noopener noreferrer"><h4>GitHub Code</h4>
                          </a>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>Portfolio Website</h3>
                          <p>I single-handedly developed this website using React, HTML, CSS, and Bootstrap, 
                            showcasing my proficiency as a full-stack developer. 
                            The site is deployed using Amazon Web Services. I even created some of the assets you see displayed!
                            Feel free to check out the code on GitHub.</p>
                        </span>
                      </Col>
                      </Row>                       
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}