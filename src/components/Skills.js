import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const skillsP = <p>Through my academic, professional, and personal experiences, 
        I have cultivated a diverse set of skills. My skills are not only technical; 
        they are life skills that enhance my ability to navigate challenging situations, 
        collaborate effectively, and innovate in different aspects of my life.
         Below, you will find a comprehensive list, each one developed through a combination 
         of education and real-world application.</p>


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            {skillsP}
                            <Carousel responsive={responsive} infitite={true} className="skill-slider">
                                <div className="item">
                                    <h5>Java</h5>
                                    <h5>C++</h5>
                                    <h5>Python</h5>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <h5>React</h5>
                                    <h5>HTML & CSS</h5>
                                    <h5>C#</h5>
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <h5>Git</h5>
                                    <h5>JIRA & Confluence</h5>
                                    <h5>Technical Documentation</h5>
                                    <h5>Mentoring</h5>
                                    
                                </div>
                                <div className="item">
                                    <h5>Time Management</h5>
                                    <h5>Adaptability</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )


}
