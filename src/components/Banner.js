import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.gif";
import {useState, useEffect} from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Software Engineer"]
    const [text,setText] = useState('');
    const period = 1250;
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const aboutMe1 = <p>
      I am a Software Engineer at Premier America Credit Union with a Bachelor of Science in Computer Science.My work centers on delivering secure, intuitive digital banking solutions that place member experience at the forefront.I contribute across the technology stack, from refining user interfaces to building dependable backend services, and I partner closely with design, product, and compliance teams to translate requirements into production ready code.
      </p>
    const aboutMe2 = <p>
      User experience informs every technical decision.I streamline workflows, automate routine tasks, and shorten release cycles
      while upholding rigorous standards
      for security, performance, and documentation.Continuous learning and knowledge sharing are essential parts of my practice.
      </p>
    const aboutMe3 = <p>
      The projects in this portfolio reflect that approach.I begin by listening to stakeholders, validate ideas with users, iterate quickly, and deliver measurable improvements.Your feedback is welcome, and I look forward to new challenges.
      </p>

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i=loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1 );
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setisDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setisDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
              {({isVisible}) => 
              <div className={isVisible ? "animated_animated animate__fadeIn" : ""}>
                  <span className="tagline"> Welcome to my Portfolio</span>
                  <h1>
                  &nbsp;Hello,&nbsp;I'm&nbsp;Marie&nbsp;Karibyan!<br/>
                    <span className="wrap">&nbsp;{text}</span>
                  </h1>
                  <p>{aboutMe1}</p>
                  <p>{aboutMe2}</p>
                  <p>{aboutMe3}</p>
                  <button onClick={() => window.location.hash = "connect"}>Let's connect<ArrowRightCircle size={25}/></button>
              </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
}