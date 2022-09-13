import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Process extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services1: [
        {
          icon: "pe-7s-diamond",
          title: "A Host Of Helpful Features",
          desc:
            "Deploy instant messaging, video conferencing, scheduling, speech-to-text, email access to voicemail and so much more.",
        },
        {
          icon: "pe-7s-display2",
          title: "Low Upfront Cost",
          desc:
            "Making monthly expenses more predictable.",
        },
        {
          icon: "pe-7s-piggy",
          title: "Seamless Integration",
          desc:
            "Anywhere/anytime without missing a beat or needing a complicated VPN.",
        },
      ],
      services2: [
        {
          icon: "pe-7s-science",
          title: "Secure Reliability",
          desc:
            "Dependable high quality redundancy avoiding costly interruptions.",
        },
        {
          icon: "pe-7s-news-paper",
          title: "Easy Management",
          desc:
            "Make changes without the need for onsite administration, with no cumbersome on-prem equipment to install and maintain.",
        },
        {
          icon: "pe-7s-plane",
          title: "Flexibility To Grow",
          desc:
            "Utilize a unified communications system that is set up to grow as your enterprise grows.",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className={"section " + this.props.sectionClass} id="services">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Our Services include UCaaS, CCaaS and CPaaS."
              desc="UCAAS BENEFITS"
            />

            <Row className="mt-4">
              {/* services box */}
              <ServiceBox services={this.state.services1} />
            </Row>

            <Row className="mt-4">
              {/* service box */}
              <ServiceBox services={this.state.services2} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Process;
