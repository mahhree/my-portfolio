import {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";
import contactImg from "../assets/img/contact_me_img.png";

export const Contact = () => {
const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
}

const [formDetails, setFormDetails] = useState(formInitialDetails);
const [buttonText, setButtonText] = useState('Send');
const [status, setStatus] = useState({});
const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
}
const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    let response = await fetch("http://localhost:5000/contact", {
        methos: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8"
        },
        body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if(result.code === 200){
        setStatus({success:true, message: 'Message sent successfully'});
    } else {
        setStatus({ success: false, message: 'Something went wrong.'})
    }
};


return (
    <section className="contact" id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch!</h2>
                    <p>
                        Add me on <a href="https://www.linkedin.com/in/marie-karibyan-3b7937214/" target="_blank">LinkedIn</a>,
                         send me an <a href="mailto:mariekaribyan@gmail.com?subject=Let's%20Connect!" target="_top">email</a>,
                         or contact me below!</p>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col sm={12} className="px-1">
                                <textarea row="6" value={formDetails.meggase} placefolder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "sucess"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
)

}