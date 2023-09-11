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
                                    <h5>SQL</h5>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                <h5>JavaScript</h5>
                                    <h5>HTML</h5>
                                    <h5>CSS</h5>
                                    <h5>Bootstrap</h5>
                                    <h5>Atlassian</h5>
                                </div>
                                <div className="item">
                                    <h5>Full-Stack Development</h5>
                                    <h5>Data Analysis and Visualization</h5>
                                    <h5>Database Administration</h5>
                                    <h5>Game Development</h5>
                                    <h5>Git Version Control</h5>
                                </div>
                                <div className="item">
                                    <h5>Technical Writing</h5>
                                    <h5>Problem Solving</h5>
                                    <h5>Time Managament</h5>
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