import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.gif";
import {useState, useEffect} from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Full Stack Developer"]
    const [text,setText] = useState('');
    const period = 1250;
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const aboutMe = <p>I graduated with a Bachelor's degree in Computer Science.  
      My portfolio serves as a window into my world, showcasing the projects that I'm most proud of and the skills I've mastered. 
      As you explore, you'll get a glimpse of my dedication to creating meaningful solutions and my commitment to continuous learning and professional growth. 
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
                  <p>{aboutMe}</p>
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