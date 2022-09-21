import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import DialpadOne from "../../images/dialpad_one.webp"

import PictureFrame from "./PictureFrame.js";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          image: "assets/images/dialpad_one.webp",
          points:
           [["All-in-one workspace for team collaboration","Move between calls, messages, and meetings on any device between teams, external partners, and customers. Plus, Dialpad's Ai takes care of the notetaking and transcribes all your conversations in real time."],
            ["Fully integrated contact center with built-in Ai tools","Build better agent and customer experiences with live coaching, sentiment analysis, predictive CSAT scoring, and more—all in the same communications platform where you send messages and host meetings."],
]
        },
        {
          image: "assets/images/dialpad_two.webp",
          points:
          [["Enterprise-level encryption","Calls over the VoIP network and in-transit web requests are encrypted using TLS. At rest, application data is permanently stored using AES 256-bit on the Google Cloud Platform."],
          ["Role-based access","Control access to certain features at the company, office, department, or user level. Granular permission levels can also be assigned for integrations across the platform."],
]
        }
      ],
    };
  }

  right(key,blog){
    return(
      <>
      <br></br>
        <Row key={key}  className="d-flex flex-row justify-content-center align-items-center text-center" style={{margin: "1em"}}>

          <Col className="hover-effect">

            <img src={blog.image} className="img-fluid" alt="Responsive Image" ></img>
          </Col>

              <Col className="col-md-4 hover-effect">

                    

                        <h1 className="center-block">{blog.title}</h1>

                        {
                          blog.points.map((point, key) => (
                              <>
                                <h3>{point[0]}</h3>
                                <p>{point[1]}</p>  
                                <br/> 
                              </>

                          ))
                        }
                        
                        



              </Col>

        </Row>      
      </>
)
    
  }

  left(key,blog){

    return(
      <>
      <br></br>
      <Row key={key} className="d-flex flex-row justify-content-center align-items-center text-center" style={{margin: "1em"}}>

      <Col className="col-md-4 hover-effect">

        <h1 className="center-block">{blog.title}</h1>

        {
              blog.points.map((point, key) => (
                  <>
                    <h3>{point[0]}</h3>
                    <p>{point[1]}</p>
                    <br/> 
                  </>

              ))
            }
        

      </Col>

      <Col className="hover-effect">

        <img src={blog.image} className="img-fluid" alt="Responsive Image" ></img>
      </Col>

</Row>      
      </>
)
  }

  render() {
    return (
      <section className="section pt-5" style={{background: "#f6f6f6"}} id="blog" >
        <Container  >
          {/* section title */}
          <SectionTitle
                title="DIALPAD FOR ENTERPRISES"
                desc="Where hybrid
                work comes
                together."
              />

          {
          this.state.blogs.map((blog, key) => {
            if(key % 2 === 0){
              return this.left(key,blog)
            }
            else{
              return this.right(key,blog)
            }
              })
          }
        

        </Container>
      </section>
    );
  }
}

export default Blog;
