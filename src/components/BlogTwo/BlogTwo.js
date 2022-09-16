import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import BlogBox from "./BlogBox.js"

import DialpadOne from "../../images/dialpad_one.webp"

class BlogTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          image: "assets/images/blog/img-1.jpg",
          category: "UI & UX Design",
          title: "No extra hardware",
          desc:
            "Dialpad lives on all your favorite devices so you can take your business on the go (plus, we work with desk phones if you need them).",
        },
        {
          image: "assets/images/blog/img-2.jpg",
          category: "Digital Marketing",
          title: "No admin overload",
          desc:
            "We keep it simple—set up new users in just a few clicks with easy deployment and management in our web portal.",
        },
        {
          image: "assets/images/blog/img-3.jpg",
          category: "Travelling",
          title: "No hidden fees",
          desc:
            "Dialpad lets you call, fax, message, text, and meet virtually—all from your work number. Save big with unlimited calling and SMS on plans starting at $15/month.",
        },
      ],
    };
  }

  render() {
    return (
      <section className="section pt-5"  id="blogtwo">
        <Container >
          {/* section title */}
          <SectionTitle
                title="DIALPAD FOR SMALL BUSINESSES"
                desc="Manage your small business
                from anywhere."
              />
        
          {/*     
          <Row className="d-flex flex-row justify-content-center align-items-center text-center">

            <Col className="hover-effect">
            
              <img src={DialpadOne} style={{height: "50%", width: "50%"}} className="img-fluid" alt="Responsive Image" ></img>
            </Col>


          </Row>

          <br />
          <br />
          <br />

          */}

          <Row className="d-flex flex-row justify-content-center align-items-center text-center">

            <h1>Set up your business phone for $15/month</h1>

            <p>And it's not just a phone system either. Talk, message, and meet—all in one platform.</p>

          </Row>
          <Row className="mt-4">
            {/* blog box */}
            <BlogBox blogs={this.state.blogs} />
          </Row>
        </Container>
      </section>
    );
  }
}

export default BlogTwo;
