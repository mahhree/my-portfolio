import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/coffee_cup.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsP = <p>Here are a few of my favorite projects, 
    which have significantly contributed to my learning and hands-on experience. 
    You may explore more of my work on my GitHub profile.</p>


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
                          <img src={projImg1} />
                          <div className="proj-txtx">
                            <h4>{'GitHub Code'}</h4>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>3D Video Game</h3>
                          <p>ABOUT</p>
                        </span>
                      </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      <Col size={12} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={projImg1} />
                          <div className="proj-txtx">
                            <h4>{'GitHub Code'}</h4>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>Spotify API</h3>
                          <p>ABOUT</p>
                        </span>
                      </Col>
                    </Row>                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <Col size={12} sm={6} md={4}>
                        <div className="proj-imgbx">
                          <img src={projImg1} />
                          <div className="proj-txtx">
                            <h4>{'GitHub Code'}</h4>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <span>
                          <h3>Portfolio Website</h3>
                          <p>I single-handedly developed this website using React, HTML, CSS, and Bootstrap, 
                            showcasing my proficiency as a full-stack developer. 
                            I deployed the project on Amazon Web Services and configured it with my personal domain. 
                            Feel free to check out the code on GitHub!</p>
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