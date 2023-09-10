import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "GitHub Code",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "GitHub Code",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "GitHub Code",
      description: "",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>blah blah blah projects</p>
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                      <p>some stuff about this proj ADD A PIC</p>
                      </Col>
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>some stuff about this proj ADD A PIC</p>                    
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