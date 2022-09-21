import React, { Component } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import emailjs from 'emailjs-com';

//Import Section Title
import SectionTitle from "../common/section-title";

import { Helmet } from "react-helmet";

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      buttonText: "Send Message",
      buttonColor: "secondary",
      buttonDisabled: false

    };
    this.myRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm('service_dr7xr5h', 'template_1jud87m', "#contact-form", 'TNfvMi8oHRCEiRuKl')
      .then((result) => {

        this.setState(prevState => ({...prevState, buttonColor: "success", buttonText: "Succesfully Sent Email!", buttonDisabled: true}))
          console.log(result.text);

          setTimeout(
            (prevState) => this.setState({... prevState, buttonColor: "secondary", buttonText: "Send Message", buttonDisabled: false }), 
            5000
          );

      }, (error) => {
          
          console.log(error.text);

          let errorText;

          if (error.text.includes("g-recaptcha-response parameter not found")){

            errorText = "Please verify ReCaptcha before continuing.";            
          }
          else{
            errorText = "ERROR Please Try again!"
          }

          this.setState(prevState => ({...prevState, buttonColor: "primary", buttonText: errorText, buttonDisabled: true}))

          setTimeout(
            (prevState) => this.setState({... prevState, buttonColor: "secondary", buttonText: "Send Message", buttonDisabled: false }), 
            5000
          );          
      });    

  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" ></script>
        </Helmet>

        <section className="section " id="contact" style={{background: "#f6f6f6"}}>
          <Container>
            {/* section title */}
            <SectionTitle
              title="GET IN TOUCH"
              desc="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results."
            />

            <Row>
              <Col lg={4}>
                <div className="mt-4 pt-4">
                  <p className="mt-4">
                    <span className="h5">Office Address 1:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                        1873 NE 37 PL, Homestead, Florida, 33033, USA
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">Office Address 2:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      4145 North Service Rd,<br />
                      Burlington ON, L7L 6A3 <br />
                      Canada
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">Working Hours:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      9:00AM To 5:00PM
                    </span>
                  </p>
                </div>
              </Col>




              <Col lg={8}>
                <div className="custom-form mt-4 pt-4">
                  <div id="message"></div>
                  {/*<AvForm ref={this.myRef} onSubmit={this.handleSubmit} name="contact-form" id="contact-form"> */}
                  <AvForm onValidSubmit={this.handleSubmit} name="contact-form" id="contact-form">
                    <Row>
                      <Col lg={6}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Your name*"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg={6}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email*"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-2">
                          <AvField
                            required
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Your Subject.."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <FormGroup className="mt-2">
                          <textarea
                            name="message"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your message..."
                          ></textarea>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="text-end">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className={`submitBnt btn btn-${this.state.buttonColor}`}
                          value={this.state.buttonText}
                          disabled={this.state.buttonDisabled}
                        />
                        <div id="simple-msg"></div>
                      </Col>
                      
                    </Row>
                    <br></br>
                    <div style={{display: "flex", justifyContent: "flex-end"}} class="g-recaptcha" id="divRecaptcha" data-sitekey="6LeYmREiAAAAABWJMegCVugFG91vIj5gJySttopk"></div>
                  </AvForm>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
      </React.Fragment>
    );
  }
}

export default Features;
