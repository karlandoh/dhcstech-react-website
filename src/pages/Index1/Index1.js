import React, { Component } from "react";

import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from "./section";
import Service from "../../components/Service/service";
import AboutUs from "../../components/AboutUs/AboutUs";
import WebsiteDesc from "../../components/WebsiteDesc/WebsiteDesc";
import Pricing from "../../components/Pricing/pricing";
import Team from "../../components/Team/Team";
import Process from "../../components/Process/Process";
import Testimonials from "../../components/Testimonials/Testimonials";
import GetStart from "../../components/GetStart/GetStart";
import Blog from "../../components/Blog/Blog";
import BlogTwo from "../../components/BlogTwo/BlogTwo";
import Contact from "../../components/Contact/Contact";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/footer";

class Index1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 4, idnm: "pricing", navheading: "Pricing" },
        { id: 5, idnm: "team", navheading: "Team" },
        { id: 6, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "contact", navheading: "Contact" },
      ],
      */
      navItems:[
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 6, idnm: "blog", navheading: "DialPad for Enterprises" },
        { id: 6, idnm: "blogtwo", navheading: "DialPad for Small Businesses" },
        { id: 7, idnm: "contact", navheading: "Contact" },
      ],
      navClass: "",
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Importing Navbar */}
        <NavbarPage
          navItems={this.state.navItems}
          navClass={this.state.navClass}
        />

        {/* section */}
        <Section />

        {/* services */}
        <Service sectionClass="pt-5" />

        {/* <AboutUs /> about us */}
        
        
        

        {/* <WebsiteDesc />website description */}
        
        
        
        {/* <Pricing />  pricing */}
        

        {/* <Team /> team */}
       

        {/* <Process />process */}
        

        {/* <Testimonials />testimonial */}
        
        
        {/* <GetStart />get started */}
        

        {/* blog */}
        <Blog />
        <BlogTwo />

        {/* contact */}
        <Contact />

        {/* social */}
        <Social />

        {/* footer */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index1;
